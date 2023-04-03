<template>
  <view class="my-userinfo">
    <view class="top-box">
      <image :src="userInfo.avatar" class="avatar"></image>
      <view class="nickname">
        <view class="nick">{{userInfo.nickName}}</view>
        <view class="type">{{userData.role === 0 ? '老师' : '学生'}}</view>
      </view>
    </view>
    <view class="info">
      <uni-list>
        <block v-for="(item, i) in infoListItems" :key="i">
          <uni-list-item :border="false" class="listItem">
            <template v-slot:header>
              <view class="icon">
                <image :src="item.icon"></image>
              </view>
            </template>
            <template v-slot:body>
              <text class="title">{{item.title}}</text>
            </template>
            <template v-slot:footer>
              <view class="detail">
                <text>{{item.detail}}</text>
              </view>
            </template>
          </uni-list-item>
        </block>
      </uni-list>
    </view>
    <view class="more">
      <uni-list>
        <uni-list-item :border="false" showArrow clickable @click="handleClick(more[0].operate)"
          v-if="userData.role === 1">
          <template v-slot:header>
            <view class="icon">
              <image :src="more[0].icon"></image>
            </view>
          </template>
          <template v-slot:body>
            <text class="title">{{more[0].title}}</text>
          </template>
        </uni-list-item>
        <block v-for="(item, i) in more" :key="i">
          <uni-list-item :border="false" showArrow clickable @click="handleClick(item.operate)" v-if="i >= 1">
            <template v-slot:header>
              <view class="icon">
                <image :src="item.icon"></image>
              </view>
            </template>
            <template v-slot:body>
              <text class="title">{{item.title}}</text>
            </template>
          </uni-list-item>
        </block>
      </uni-list>
    </view>
    <view class="dialogLogOut">
      <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="退出登录" content="您确定退出登录吗？"
          @confirm="logOut" @close="dialogClose"></uni-popup-dialog>
      </uni-popup>
    </view>
    <view class="changePhotoDialog">
     <uni-popup ref="changePhoto" background-color="#fff">
        <view class="popup-content">
          <view class="dialogTitle">
            <text>更改照片</text>
          </view>
          <view class="dialogContent">
            <uni-file-picker limit="1" v-model="photo" :sourceType="['album']"></uni-file-picker>
          </view>
          <view class="dialogButtonGroup">
            <view class="dialogButton" @click="cancelChange">
              <text class="cancel">取消</text>
            </view>
            <view class="dialogButton borderLeft" @click="confirmChange">
              <text class="confirm">确定</text>
            </view>
          </view>
        </view>
      </uni-popup>
    </view>
  </view>
</template>

<script>
  import logger from '@/utils/logger.js';
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    pathToBase64
  } from 'image-tools'
  
  export default {
    data() {
      return {
        infoListItems: [{
            icon: require('@/static/tab_icons/school.png'),
            title: '学校',
            detail: ''
          },
          {
            icon: require('@/static/tab_icons/code.png'),
            title: '',
            detail: ''
          },
          {
            icon: require('@/static/tab_icons/name.png'),
            title: '姓名',
            detail: ''
          }
        ],
        more: [{
            icon: require('@/static/tab_icons/photo.png'),
            title: '更换照片',
            operate: 'openChangePhotoDialog'
          },
          {
            icon: require('@/static/tab_icons/about.png'),
            title: '头像昵称',
            operate: 'changeAvatarAndNick'
          },
          {
            icon: require('@/static/tab_icons/logOut.png'),
            title: '退出登录',
            operate: 'dialogToggle'
          }
        ],
        photo: [],   // 图片数组
        stuBase64Photo: ''    // base64格式的图片
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo', 'userData', 'token'])
    },
    created() {
      this.infoListItems[0].detail = this.userData.school
      this.infoListItems[1].title = this.userData.role === 0 ? '工号' : '学号'
      this.infoListItems[1].detail = this.userData.code
      this.infoListItems[2].detail = this.userData.name
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateUserData', 'updateToken']),
      // 动态绑定列表点击事件
      handleClick(operate) {
        this[operate]()
      },
      // 更换图片
      openChangePhotoDialog() {
        this.$refs.changePhoto.open('center')
      },
      // 更换图片对话框取消
      cancelChange() {
        this.$refs.changePhoto.close()
      },
      // 更换图片对话框确定
      confirmChange() {
        if (this.photo.length) {
          this.imageToBase64(this.photo[0].path)
          this.$refs.changePhoto.close()
        } else {
          uni.$showMsg('请选择照片', 'none')
        }
      },
      // 本地图片转base64
      imageToBase64(path) {
        pathToBase64(path)
        .then(base64 => {
          this.stuBase64Photo = base64
          this.changePhoto()
          })
          .catch(error => {
            console.error(error)
          })
      },
      // 更新照片
      async changePhoto() {
        const register = uniCloud.importObject('register')
        let updatePhotoRes = await register.changePhoto(this.token, this.stuBase64Photo)
        if (updatePhotoRes.code === 401) {
          uni.$showMsg(updatePhotoRes.message, 'error')
        } else {
          uni.$showMsg(updatePhotoRes.message, 'success')
        }
      },
      // 更换头像昵称
      changeAvatarAndNick() {
        uni.navigateTo({
          url: '/page_change/change/change'
        })
      },
      // 退出登录询问
      dialogToggle() {
        this.$refs.alertDialog.open()
      },
      // 对话框点击取消
      dialogClose() {
        this.$refs.alertDialog.close()
      },
      // 对话框点击确定
      logOut() {
        logger.log('| TUI-User-Center | mine  | quit-logout ')
        uni.$TUIKit.logout().then(() => {
          this.updateUserInfo({})
          this.updateUserData({})
          this.updateToken('')
          uni.clearStorage()
          uni.reLaunch({
            url: '/page_index/index/index',
            success: () => {
              uni.$showMsg('退出成功', 'none')
            }
          });
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('my.less');
</style>
