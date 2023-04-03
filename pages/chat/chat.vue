<template>
  <view class="body">
    <view class="container-conversation" v-if="conversationList.length">
      <view class="scroll-box">
        <view class="uni-list margintop-bar">
          <view v-for="item in conversationList" :key="item.conversationID" @tap="handleRoute(item.conversationID)">
            <uni-swipe-action-item :right-options="options" @click="deleteConversation(item.conversationID)" :auto-close="autoClose">
              <TUI-conversation-item :data-type="item.type" :conversation="item"></TUI-conversation-item>
            </uni-swipe-action-item>
          </view>
        </view>
      </view>
    </view>
    <view class="noData" v-else>
      <image src="@/static/tab_icons/noMessage.png"/>
    </view>
  </view>
</template>
<!-- 这里有个加载的补丁逻辑待优化，页面向SDK请求conversationList的时候会有时延，
造成页面的一个抖动，这里加一个if逻辑打一个补丁，后续继续优化 -->
<script>
  import logger from '@/utils/logger.js';
  import TUIConversationItem from '@/components/tui-conversation/conversation-item/index.vue';
  // import TUIMessageList from '@/components/tui-chat/message-list/index.vue';

  export default {
    data() {
      return {
        conversationList: [],
        options: [{
          text: '删除',
          style: {
            backgroundColor: '#F56C6C'
          }
        }]
      };
    },

    components: {
      TUIConversationItem
      // TUIMessageList
    },
    props: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      // 登入后拉去会话列表
      this.getConversationList();
      uni.$TUIKit.on(uni.$TUIKitEvent.CONVERSATION_LIST_UPDATED, this.onConversationListUpdated);
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
      uni.$TUIKit.off(uni.$TUIKitEvent.SDK_READY, this.onConversationListUpdated);
    },

    methods: {
      deleteConversation(conversationID) {
        console.log('删除会话')
        uni.$TUIKit.deleteConversation(conversationID);
        // this.$nextTick(() => {
        //   this.getConversationList()
        // })
      },
      handleRoute(id) {
        const url = `/page_chat/TUI-Chat/chat?conversationID=${id}`;
        uni.navigateTo({
          url
        });
      },
      onConversationListUpdated(event) {
        logger.log('TUI-conversation | onConversationListUpdated  |ok');
        this.setData({
          conversationList: event.data
        });
      },

      getConversationList() {
        uni.$TUIKit.getConversationList().then(imResponse => {
          logger.log(
            `TUI-conversation | getConversationList | getConversationList-length: ${imResponse.data.conversationList.length}`
          );
          this.setData({
            conversationList: imResponse.data.conversationList
          });
        });
      }
    }
  };
</script>
<style lang="less" scoped>
  @import url('chat.css');
</style>
