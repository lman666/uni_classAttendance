<template>
  <view class="body">
    <teacherPart v-if="token && userData && showPart === 'teacher'" />
    <studentPart v-if="token && userData && showPart === 'student'" :token="token" :userData="userData" v-else />
  </view>
</template>

<script>
  import {
    setTokenStorage
  } from '../../utils/token';
  import logger from '../../utils/logger';
  import {
    genTestUserSig
  } from '../../debug/GenerateTestUserSig.js';
  import teacherPart from '@/components/teacherPart/teacherPart.vue'
  import studentPart from '@/components/studentPart/studentPart.vue'
  import {
    mapState
  } from 'vuex'
  const {
    getTokenStorage
  } = require('../../utils/token.js');
  const app = getApp();

  export default {
    components: {
      teacherPart,
      studentPart
    },
    computed: {
      ...mapState('m_user', ['userInfo', 'token', 'userData'])
    },
    data() {
      return {
        showPart: 'teacher'
      }
    },
    onLoad() {
      if (JSON.stringify(this.userInfo) === '{}' || this.token === '' || !this.verify()) {
        uni.reLaunch({
          url: '/pages/index/index'
        })
      }
    },
    onShow() {
      if (this.userData.role === 0) {
        this.showPart = 'teacher'
        this.login(this.userInfo.openid)
      } else if (this.userData.role === 1) {
        this.showPart = 'student'
        this.login(this.userInfo.openid)
      }
    },
    methods: {
      // 验证token是否正确
      async verify() {
        let pro = false
        if (this.token !== '') {
          const tokenHelper = uniCloud.importObject('tokenHelper')
          pro = await tokenHelper.verifyToken(this.token)
        }
        return pro
      },
      // 聊天功能登陆
      login(openid) {
        const userID = openid;
        const userSig = genTestUserSig(userID).userSig;
        const SDKAppID = app.globalData.SDKAppID;
        logger.log(`TUI-login | login  | userSig:${userSig} userID:${userID}`);
        // #ifdef  APP-PLUS
        uni.$aegis.reportEvent({
          name: 'platform',
          ext1: 'platform-APP',
          ext2: 'uniTuikitExternal',
          ext3: `${SDKAppID}`,
        })
        // #endif
        // #ifdef MP-WEIXIN  
        uni.$aegis.reportEvent({
          name: 'platform',
          ext1: 'platform-MP-WEIXIN',
          ext2: 'uniTuikitExternal',
          ext3: `${SDKAppID}`,
        })
        // #endif
        // #ifdef H5
        uni.$aegis.reportEvent({
          name: 'platform',
          ext1: 'platform-H5',
          ext2: 'uniTuikitExternal',
          ext3: `${SDKAppID}`,
        })
        uni.showToast({
          title: 'TUIKit 暂不支持 H5 / web ，请使用者自己完成兼容哦～ ',
          icon: 'none',
          duration: 3000
        });
        // #endif
        app.globalData.userInfo = {
          userSig,
          userID
        };
        setTokenStorage({
          userInfo: app.globalData.userInfo
        });
        wx.setStorageSync(`TIM_${getApp().SDKAppID}_isTUIKit`, true);
        uni.$TUIKit.login({
          userID: userID,
          userSig: userSig
        }).then(() => {
          uni.$aegis.reportEvent({
            name: 'login',
            ext1: 'login-success',
            ext2: 'uniTuikitExternal',
            ext3: `${SDKAppID}`,
          })
        }).catch((error) => {
          uni.$aegis.reportEvent({
            name: 'login',
            ext1: `login-failed#error:${error}`,
            ext2: 'uniTuikitExternal',
            ext3: `${SDKAppID}`,
          })
        })

        // 登录原生插件
        // #ifdef APP-PLUS
        if (typeof(uni.$TUICallKit) == 'undefined') {
          uni.showToast({
            title: '如果需要音视频功能，请集成插件使用真机运行并且自定义基座调试哦～',
            icon: 'none',
            duration: 3000
          });
          logger.error(
            '请使用真机运行并且自定义基座调试，否则影响音视频功能～ 插件地址：https://ext.dcloud.net.cn/plugin?id=9035 , 调试地址：https://nativesupport.dcloud.net.cn/NativePlugin/use/use'
          );
        } else {
          uni.$TUICallKit.login({
              SDKAppID: SDKAppID,
              userID: userID,
              userSig: userSig
            },
            res => {
              console.log(JSON.stringify(res.msg));
              uni.showToast({
                title: 'login',
                icon: 'none'
              });
            }
          );
        }

        // #endif
        if (this.path && this.path !== 'undefined') {
          uni.redirectTo({
            url: this.path
          });
        }
      }
    }
  }
</script>

<style lang="less">

</style>
