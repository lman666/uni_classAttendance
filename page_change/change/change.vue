<template>
  <view class="body">
    <view class="change_avatar">
      <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="avatar"></image>
      </button>
    </view>
    <view class="change_nick">
      <text class="title">昵称</text>
      <input type="nickname" class="weui-input" placeholder="请输入昵称" :value="oldNick" @input="inputEve" />
    </view>
    <view class="button">
      <button type="default" @click="submit">提交</button>
    </view>
  </view>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
        avatar: '',
        oldNick: '',
        newNick: ''
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo', 'token'])
    },
    onLoad() {
      this.avatar = this.userInfo.avatar
      this.oldNick = this.userInfo.nickName
      this.newNick = this.userInfo.nickName
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo']),
      // 选择头像触发
      onChooseAvatar(e) {
        this.avatar = e.detail.avatarUrl
      },
      // 表单提交
      async submit() {
        if (this.newNick === '') {
          uni.$showMsg('请输入昵称', 'none')
        } else {
          const register = uniCloud.importObject('register')
          let updateRes = await register.changeAvatarAndNick(this.token, this.newNick, this.avatar)
          if (updateRes.code === 401) {
            uni.$showMsg(updateRes.message, 'error')
          } else {
            this.updateMyProfile()
          }
        }
      },
      // 输入事件
      inputEve(e) {
        this.newNick = e.detail.value
      },
      // 修改聊天个人信息
      updateMyProfile() {
        uni.$TUIKit
          .updateMyProfile({
            avatar: this.avatar,
            nick: this.newNick
          })
          .then(imResponse => {
            // 更新资料成功
            // console.log('update', imResponse.data);
            this.changeLocalInfo()
          })
          .catch((imError) => {
            // 更新资料失败
            // console.warn('updateMyProfile error:', imError);
            uni.$showMsg('更新失败', 'error')
          });
      },
      // 修改本地存储
      changeLocalInfo() {
        this.userInfo.avatar = this.avatar
        this.userInfo.nickName = this.newNick
        this.updateUserInfo(this.userInfo)
        uni.$showMsg('更新成功', 'success')
        this.navigateBack()
      },
      // 跳转页面
      navigateBack() {
        let timer = setTimeout(() => {
          uni.navigateBack()
          clearTimeout(timer)
        }, 1500)
      }
    }
  }
</script>

<style lang="less">
  @import url('change.less');
</style>
