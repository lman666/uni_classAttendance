(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tui-chat/message-list/index"],{"027b":function(e,t,n){"use strict";n.r(t);var s=n("046c"),i=n("f3bf");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("11f4");var a=n("f0c5"),c=Object(a["a"])(i["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],void 0);t["default"]=c.exports},"046c":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var s=function(){var e=this.$createElement;this._self._c},i=[]},"11f4":function(e,t,n){"use strict";var s=n("472a"),i=n.n(s);i.a},"472a":function(e,t,n){},cac9:function(e,t,n){"use strict";(function(e){var s=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("448a")),o={data:function(){return{avatar:"",userID:"",messageList:[],scrollView:"",scrollTop:0,triggered:!0,nextReqMessageID:"",isCompleted:!1}},components:{TUITextMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/text-message/index")]).then(function(){return resolve(n("c391"))}.bind(null,n)).catch(n.oe)},TUIImageMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/image-message/index")]).then(function(){return resolve(n("2408"))}.bind(null,n)).catch(n.oe)},TUIVideoMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/video-message/index")]).then(function(){return resolve(n("805a"))}.bind(null,n)).catch(n.oe)},TUIAudioMessage:function(){n.e("components/tui-chat/message-elements/audio-message/index").then(function(){return resolve(n("bce3"))}.bind(null,n)).catch(n.oe)},TUICustomMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/custom-message/index")]).then(function(){return resolve(n("4ede"))}.bind(null,n)).catch(n.oe)},TUITipMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/tip-message/index")]).then(function(){return resolve(n("b445"))}.bind(null,n)).catch(n.oe)},TUISystemMessage:function(){Promise.all([n.e("common/vendor"),n.e("components/tui-chat/message-elements/system-message/index")]).then(function(){return resolve(n("4a7e"))}.bind(null,n)).catch(n.oe)},TUIFaceMessage:function(){n.e("components/tui-chat/message-elements/face-message/index").then(function(){return resolve(n("5b8b"))}.bind(null,n)).catch(n.oe)},TUIFileMessage:function(){n.e("components/tui-chat/message-elements/file-message/index").then(function(){return resolve(n("9678"))}.bind(null,n)).catch(n.oe)}},props:{conversation:{type:Object,default:function(){}}},watch:{conversation:{handler:function(e){var t=this;e.conversationID&&this.setData({conversation:e},(function(){t.getMessageList(e)}))},immediate:!0,deep:!0}},mounted:function(){var t=this;e.$TUIKit.getMyProfile().then((function(e){t.avatar=e.data.avatar,t.userID=e.data.userID})),e.$TUIKit.on(e.$TUIKitEvent.MESSAGE_RECEIVED,this.$onMessageReceived,this),e.$TUIKit.on(e.$TUIKitEvent.MESSAGE_READ_BY_PEER,this.$onMessageReadByPeer,this)},destroyed:function(){e.$TUIKit.off(e.$TUIKitEvent.MESSAGE_RECEIVED,this.$onMessageReceived)},methods:{refresh:function(){var e=this;this.isCompleted?this.setData({isCompleted:!0,triggered:!1}):(this.getMessageList(this.conversation),setTimeout((function(){e.setData({triggered:!1})}),2e3))},getMessageList:function(t){var n=this;this.isCompleted||e.$TUIKit.getMessageList({conversationID:t.conversationID,nextReqMessageID:this.nextReqMessageID,count:15}).then((function(e){var t=e.data.messageList;n.nextReqMessageID=e.data.nextReqMessageID,n.isCompleted=e.data.isCompleted,n.messageList=[].concat((0,i.default)(t),(0,i.default)(n.messageList)),n.$handleMessageRender(n.messageList,t)}))},updateMessageList:function(e){this.messageList=[].concat((0,i.default)(this.messageList),[e]),this.scrollToButtom()},$onMessageReadByPeer:function(){this.setData({messageList:this.messageList})},scrollToButtom:function(){var t=this,n=e.createSelectorQuery().in(this),s=n.select("#message-scroll");s.boundingClientRect((function(e){t.$nextTick((function(){t.scrollTop=e.height}))})).exec()},$onMessageReceived:function(e){var t=this,n=e,s=[];n.data.forEach((function(e){e.conversationID===t.conversation.conversationID&&s.push(Object.assign(e))})),this.messageList=this.messageList.concat(s),this.scrollToButtom()},$handleMessageRender:function(e){var t=this;e.length>0&&(this.setData({messageList:e},(function(){})),this.$nextTick((function(){t.scrollTop=9999})))}}};t.default=o}).call(this,n("543d")["default"])},f3bf:function(e,t,n){"use strict";n.r(t);var s=n("cac9"),i=n.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(o);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-chat/message-list/index-create-component',
    {
        'components/tui-chat/message-list/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("027b"))
        })
    },
    [['components/tui-chat/message-list/index-create-component']]
]);
