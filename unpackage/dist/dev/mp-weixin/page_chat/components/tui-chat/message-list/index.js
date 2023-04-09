require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-list/index"],{264:function(e,t,n){"use strict";n.r(t);var s=n(265),a=n(267);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(269);var o,c=n(53),r=Object(c["default"])(a["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],o);r.options.__file="page_chat/components/tui-chat/message-list/index.vue",t["default"]=r.exports},265:function(e,t,n){"use strict";n.r(t);var s=n(266);n.d(t,"render",(function(){return s["render"]})),n.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return s["recyclableRender"]})),n.d(t,"components",(function(){return s["components"]}))},266:function(e,t,n){"use strict";var s;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return s}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=!1,o=[];a._withStripped=!0},267:function(e,t,n){"use strict";n.r(t);var s=n(268),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},268:function(e,t,n){"use strict";(function(e){var s=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(18)),i=function(){Promise.all([n.e("page_chat/common/vendor"),n.e("page_chat/components/tui-chat/message-elements/text-message/index")]).then(function(){return resolve(n(397))}.bind(null,n)).catch(n.oe)},o=function(){Promise.all([n.e("page_chat/common/vendor"),n.e("page_chat/components/tui-chat/message-elements/image-message/index")]).then(function(){return resolve(n(406))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("page_chat/common/vendor"),n.e("page_chat/components/tui-chat/message-elements/video-message/index")]).then(function(){return resolve(n(413))}.bind(null,n)).catch(n.oe)},r=function(){n.e("page_chat/components/tui-chat/message-elements/audio-message/index").then(function(){return resolve(n(421))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("page_chat/components/tui-chat/message-elements/custom-message/index")]).then(function(){return resolve(n(428))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("page_chat/common/vendor"),n.e("page_chat/components/tui-chat/message-elements/tip-message/index")]).then(function(){return resolve(n(435))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("page_chat/common/vendor"),n.e("page_chat/components/tui-chat/message-elements/system-message/index")]).then(function(){return resolve(n(442))}.bind(null,n)).catch(n.oe)},m=function(){n.e("page_chat/components/tui-chat/message-elements/face-message/index").then(function(){return resolve(n(449))}.bind(null,n)).catch(n.oe)},g=function(){n.e("page_chat/components/tui-chat/message-elements/file-message/index").then(function(){return resolve(n(456))}.bind(null,n)).catch(n.oe)},f={data:function(){return{avatar:"",userID:"",messageList:[],scrollView:"",scrollTop:0,triggered:!0,nextReqMessageID:"",isCompleted:!1}},components:{TUITextMessage:i,TUIImageMessage:o,TUIVideoMessage:c,TUIAudioMessage:r,TUICustomMessage:u,TUITipMessage:l,TUISystemMessage:d,TUIFaceMessage:m,TUIFileMessage:g},props:{conversation:{type:Object,default:function(){}}},watch:{conversation:{handler:function(e){var t=this;e.conversationID&&this.setData({conversation:e},(function(){t.getMessageList(e)}))},immediate:!0,deep:!0}},mounted:function(){var t=this;e.$TUIKit.getMyProfile().then((function(e){t.avatar=e.data.avatar,t.userID=e.data.userID})),e.$TUIKit.on(e.$TUIKitEvent.MESSAGE_RECEIVED,this.$onMessageReceived,this),e.$TUIKit.on(e.$TUIKitEvent.MESSAGE_READ_BY_PEER,this.$onMessageReadByPeer,this)},destroyed:function(){e.$TUIKit.off(e.$TUIKitEvent.MESSAGE_RECEIVED,this.$onMessageReceived)},methods:{refresh:function(){var e=this;this.isCompleted?this.setData({isCompleted:!0,triggered:!1}):(this.getMessageList(this.conversation),setTimeout((function(){e.setData({triggered:!1})}),2e3))},getMessageList:function(t){var n=this;this.isCompleted||e.$TUIKit.getMessageList({conversationID:t.conversationID,nextReqMessageID:this.nextReqMessageID,count:15}).then((function(e){var t=e.data.messageList;n.nextReqMessageID=e.data.nextReqMessageID,n.isCompleted=e.data.isCompleted,n.messageList=[].concat((0,a.default)(t),(0,a.default)(n.messageList)),n.$handleMessageRender(n.messageList,t)}))},updateMessageList:function(e){this.messageList=[].concat((0,a.default)(this.messageList),[e]),this.scrollToButtom()},$onMessageReadByPeer:function(){this.setData({messageList:this.messageList})},scrollToButtom:function(){var t=this,n=e.createSelectorQuery().in(this),s=n.select("#message-scroll");s.boundingClientRect((function(e){t.$nextTick((function(){t.scrollTop=e.height}))})).exec()},$onMessageReceived:function(e){var t=this,n=e,s=[];n.data.forEach((function(e){e.conversationID===t.conversation.conversationID&&s.push(Object.assign(e))})),this.messageList=this.messageList.concat(s),this.scrollToButtom()},$handleMessageRender:function(e){var t=this;e.length>0&&(this.setData({messageList:e},(function(){})),this.$nextTick((function(){t.scrollTop=9999})))}}};t.default=f}).call(this,n(2)["default"])},269:function(e,t,n){"use strict";n.r(t);var s=n(270),a=n.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=a.a},270:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/page_chat/components/tui-chat/message-list/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-list/index-create-component',
    {
        'page_chat/components/tui-chat/message-list/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(264))
        })
    },
    [['page_chat/components/tui-chat/message-list/index-create-component']]
]);
