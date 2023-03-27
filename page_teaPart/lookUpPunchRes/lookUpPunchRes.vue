<template>
  <view class="punchResList">
    <uni-list>
      <block v-for="(item, i) in punchResInfo.punchResList" :key="i">
        <uni-list-item>
        	<template v-slot:header>
        		<view class="stuInfo">
              <view class="name">{{item.name}}</view>
              <view class="code">{{item.code}}</view>
            </view>
        	</template>
        	<template v-slot:footer>
        		<view class="operate">
              <button v-if="item.isPunch === false" size="mini" @click="punch(item.code, item.name, i)">补卡</button>
              <button v-if="item.isPunch === true" size="mini" disabled>已打卡</button>
              <button class="chat" size="mini" @click="chat(item.openid)">聊天</button>
            </view>
        	</template>
        </uni-list-item>
      </block>
    </uni-list>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        punchResInfo: {}
      }
    },
    computed: {
      ...mapState('m_user', ['token'])
    },
    onLoad(option) {
      this.punchResInfo = JSON.parse(decodeURIComponent(option.punchResInfo))
      console.log(this.punchResInfo)
    },
    methods: {
      async punch(code, name, i) {
        let obj = {
          course_id: this.punchResInfo.course_id,
          code: code,
          name: name,
          date: this.punchResInfo.date
        }
        const clockHelper = uniCloud.importObject('clockHelper')
        let res = await clockHelper.punchTheClock(this.token, obj)
        if (res.code === 400) {
          uni.$showMsg(res.message, 'none')
        } else if (res.code === 403) {
          uni.$showMsg(res.message, 'none')
        } else {
          this.punchResInfo.punchResList[i].isPunch = true
        }
      },
      // 聊天
      chat(openid) {
        uni.$TUIKit
        	.getUserProfile({
        		userIDList: ['lin']
        	})
        	.then(imRes => {
        		if (imRes.data.length > 0) {
        			let id = 'lin'
        			uni.navigateTo({
        			  url: `/page_chat/TUI-Chat/chat?conversationID=C2C${id}`
        			})
        		} else {
        			uni.showToast({
        				title: '用户不存在，可能未注册',
        				icon: 'error'
        			})
        		}
        	})
      },
      // 点击返回键调用
      bindClick() {
        let pages = getCurrentPages()   // 获取当前页面栈的实例
      	let prevPage = pages[pages.length - 2]   //上一页页面实例
        prevPage.$vm.$children[0].getCourseInfo(this.token, this.punchResInfo.course_id)   // 调用上一页方法
        uni.navigateBack()   // 返回上级页面
      }
    },
    onUnload() {
      this.bindClick()
    }
  }
</script>

<style lang="less">
  .punchResList {
    .stuInfo {
      .name {
        color: #3b4144;
        font-size: 28rpx;
      }
      
      .code {
        color: #999;
        font-size: 24rpx;
        margin-top: 6rpx;
      }
    }
    
    .operate {
      width: 230rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      button {
        width: 100rpx;
        height: 66rpx;
        box-sizing: border-box;
        line-height: 66rpx;
        padding: 0;
        
        &.chat {
          background-color: #07C160;
          color: #fff;
        }
      }
    }
  }
</style>
