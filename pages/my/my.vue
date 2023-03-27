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
            <uni-file-picker limit="1" v-model="photo"></uni-file-picker>
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
            title: '更换头像昵称',
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
      // 关于我们
      changeAvatarAndNick() {
        console.log('changeAvatarAndNick')
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
          uni.clearStorage()
          uni.reLaunch({
            url: '../index/index',
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
  .my-userinfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;

    .top-box {
      width: 100%;
      height: 400rpx;
      background-color: #ffd2d3;
      display: flex;
      align-items: center;

      .avatar {
        margin-bottom: 20rpx;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-left: 100rpx;
      }

      .nickname {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20rpx;

        color: #fff;
        height: 90rpx;

        .nick {
          font-size: 36rpx;
        }

        .type {
          font-size: 24rpx;
        }
      }
    }

    .info,
    .more {
      overflow: hidden;
      width: 680rpx;
      background-color: #fff;
      border: 1rpx solid #ccc;
      border-radius: 20rpx;
      box-shadow: #ccc 0 0 5rpx 2rpx;
      color: rgb(106, 106, 106);

      /deep/ .uni-list-item {
        .uni-list-item__container {
          align-items: center;

          .icon {
            image {
              vertical-align: middle;
              width: 40rpx;
              height: 40rpx;
            }
          }

          .title {
            font-size: 30rpx;
            margin-left: 25rpx;
          }
        }
      }
    }

    .info {
      position: absolute;
      left: 50%;
      top: 350rpx;
      transform: translateX(-50%);

      /deep/ .uni-list-item {

        .uni-list-item__container {
          padding: 16rpx 30rpx;

          .detail {
            flex: 1;
            color: #c2c2c2;
            font-size: 24rpx;
            text-align: end;
          }
        }
      }
    }

    .more {
      margin-top: 250rpx;
    }

    .changePhotoDialog {
      uni-popup {
        /deep/ .uni-popup.center uni-transition:nth-of-type(2) .vue-ref .uni-popup__wrapper.center{
          border-radius: 22rpx;
        }
      }
      
      .popup-content {
        width: 600rpx;
        border-radius: 22rpx;
        background-color: #fff;

        .dialogTitle {
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-top: 20px;
          color: #909399;
          font-size: 16px;
          font-weight: 500;
        }

        .dialogContent {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 20px;
          
          /deep/ .uni-file-picker .uni-file-picker__container {
            justify-content: center;
          }
        }

        .dialogButtonGroup {
          display: flex;
          flex-direction: row;
          border-top-color: #f5f5f5;
          border-top-style: solid;
          border-top-width: 1px;

          .dialogButton {
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 45px;
            font-size: 16px;

            .cancel {
              color: #333;
            }

            .confirm {
              color: #007aff;
            }
          }

          .borderLeft {
            border-left-color: #f0f0f0;
            border-left-style: solid;
            border-left-width: 1px;
          }
        }
      }
    }
  }
</style>
