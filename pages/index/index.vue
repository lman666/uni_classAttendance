<template>
  <view class="container">
    <view class="title">课堂在线考勤平台</view>
    <view class="form">
      <view class="data">
        <uni-forms ref="valiForm" :modelValue="formData" :rules="rules">
          <uni-forms-item label="学校" required name="school">
            <uni-easyinput v-model="formData.school" placeholder="请输入学校名称" :disabled="isDisabled" />
          </uni-forms-item>
          <uni-forms-item label="姓名" required name="name">
            <uni-easyinput v-model="formData.name" placeholder="请输入姓名" :disabled="isDisabled" />
          </uni-forms-item>
          <uni-forms-item label="角色" required>
            <uni-data-checkbox v-model="formData.role" :localdata="roles" :disabled="isDisabled" />
          </uni-forms-item>
          <uni-forms-item label="工号" required name="code" v-if="formData.role === 0">
            <uni-easyinput v-model="formData.code" placeholder="请输入工号" :disabled="isDisabled"/>
          </uni-forms-item>
          <uni-forms-item label="学号" required name="code" v-if="formData.role === 1">
            <uni-easyinput v-model="formData.code" placeholder="请输入学号" :disabled="isDisabled"/>
          </uni-forms-item>
          <uni-forms-item label="选择个人照片" required name="photo" label-width="120px" v-if="formData.role === 1">
            <uni-file-picker limit="1" v-model="formData.photo"></uni-file-picker>
          </uni-forms-item>
        </uni-forms>
        <view class="button">
          <button type="default" @click="submit('valiForm')">提交</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
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
        isDisabled: false,
        //基本信息
        formData: {
          school: '',
          name: '',
          role: 0,
          code: '',
          photo: []
        },
        // 用户头像昵称openid
        userInfo: {
          avatar: '',
          nickName: '',
          openid: ''
        },
        // 单选数据源
        roles: [{
          text: '老师',
          value: 0
        }, {
          text: '学生',
          value: 1
        }],
        // 校验规则
        rules: {
          school: {
            rules: [{
              required: true,
              errorMessage: '学校名称不能为空'
            }]
          },
          name: {
            rules: [{
              required: true,
              errorMessage: '姓名不能为空'
            }]
          },
          code: {
            rules: [{
              required: true,
              errorMessage: '工号/学号不能为空'
            }]
          },
          photo: {
            rules: [{
              required: true,
              errorMessage: '请选择照片'
            }]
          }
        },
        callBy: 'attendance'
      };
    },

    computed: {
      ...mapState('m_user', ['userData'])
    },

    onLoad(option) {
      this.callBy = option.callBy
      if (JSON.stringify(this.userData) !== '{}') {
        this.formData.school = this.userData.school;
        this.formData.name = this.userData.name;
        this.formData.role = this.userData.role;
        this.formData.code = this.userData.code;
        this.formData.photo = this.userData.photo;
        this.isDisabled = true;
      }
    },

    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateUserData', 'updateToken']),
      submit(ref) {
        this.$refs[ref].validate().then(res => {
          if (this.formData.role === 1) {
            this.imageToBase64(this.formData.photo[0].path)
          }
          this.updateUserData(this.formData)

          // 获取code
          uni.login({
            provider: 'weixin', //使用微信登录
            success: (loginRes) => {
              this.get(loginRes.code)
            }
          });

          // 获取头像昵称
          uni.getUserProfile({
            desc: '用于完善资料',
            success: (res) => {
              this.userInfo.avatar = res.userInfo.avatarUrl
              this.userInfo.nickName = res.userInfo.nickName
              this.updateUserInfo(this.userInfo)
              this.saveData(this.userInfo)
            },
            fail: (res) => {
              console.log(res)
            }
          })
        }).catch(err => {
          console.log('err', err)
        })
      },
      
      // 本地图片转base64
      imageToBase64(path) {
        pathToBase64(path)
        .then(base64 => {
          this.formData.stuBase64Photo = base64
          })
          .catch(error => {
            console.error(error)
          })
      },

      // 获取openid
      async get(code) {
        const getOpenId = uniCloud.importObject('getOpenId')
        let res = await getOpenId.exam(code)
        this.userInfo.openid = res.data.openid
      },
      // 保存到数据库
      async saveData(obj) {
        let data = {
          ...obj,
          code: this.formData.code,
          school: this.formData.school,
          role: this.formData.role,
          name: this.formData.name,
          stuBase64Photo: this.formData.stuBase64Photo
        };
        const register = uniCloud.importObject('register')
        let regisRes = await register.reg(data)  // 存储数据
        console.log(regisRes)
        if (regisRes.code === 200) {
          const tokenHelper = uniCloud.importObject('tokenHelper')
          let token = await tokenHelper.getToken(this.userInfo.openid) // 获取token
          this.updateToken(token) // 存储token
          this.jump()
        } else {
          uni.clearStorage()
          uni.$showMsg(regisRes.message, 'none')
        }
      },
      // 跳转到对应页面
      jump() {
        uni.switchTab({
          url: '/pages/attendance/attendance'
        })
      }
    }
  }
</script>

<style lang="less">
  page,
  .container {
    width: 100%;
    height: 100%;
    background-color: #ffd2d3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      line-height: 300rpx;
      font-size: 38rpx;
      color: #fff;
      text-align: center;
      height: 300rpx;
    }

    .form {
      box-sizing: border-box;
      border-radius: 40rpx 40rpx 0 0;
      flex: 1;
      width: 100%;
      height: 500rpx;
      background-color: #fff;
      padding: 40rpx 40rpx 0 40rpx;
      
      /deep/ .uni-forms-item {
        align-items: center;
      }

      .button {
        margin-top: 80rpx;
      }
    }
  }
</style>
