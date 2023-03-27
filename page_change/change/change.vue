<template>
  <view class="body">
    <view class="change_avatar">
      <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="avatar"></image>
      </button>
    </view>
    <view class="change_nick">
      <text class="title">昵称</text>
      <input type="nickname" class="weui-input" placeholder="请输入昵称" />
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
        avatar: '',
        nickName: ''
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo', 'token'])
    },
    onLoad() {
      this.avatar = this.userInfo.avatar
      this.nickName = this.userInfo.nickName
    },
    methods: {
      onChooseAvatar(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="less">
  page {
    background-color: #fff;
  }
  
  .change_avatar {
    padding: 100rpx 0;
    
    .avatar-wrapper {
      width: 100rpx;
      height: 100rpx;
      padding: 0;
      
      &::after {
        border: unset;
      }
      
      .avatar {
        width: 100rpx;
        height: 100rpx;
      }
    }
  }
  
  .change_nick {
    display: flex;
    padding: 20rpx 30rpx;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    
    .title {
      margin-right: 120rpx;
    }
    
    .weui-input {
      flex: 1;
    }
  }
</style>
