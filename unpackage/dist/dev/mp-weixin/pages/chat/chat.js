(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{65:function(n,t,e){"use strict";(function(n,t){var o=e(4);e(26),e(27);o(e(25));var i=o(e(66));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e(1)["default"],e(2)["createPage"])},66:function(n,t,e){"use strict";e.r(t);var o=e(67),i=e(69);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e(71);var a,s=e(53),c=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"bf16e7f4",null,!1,o["components"],a);c.options.__file="pages/chat/chat.vue",t["default"]=c.exports},67:function(n,t,e){"use strict";e.r(t);var o=e(68);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},68:function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return i})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return r})),e.d(t,"components",(function(){return o}));try{o={uniSwipeActionItem:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item")]).then(e.bind(null,140))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.conversationList.length);n.$mp.data=Object.assign({},{$root:{g0:e}})},r=!1,a=[];i._withStripped=!0},69:function(n,t,e){"use strict";e.r(t);var o=e(70),i=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},70:function(n,t,e){"use strict";(function(n){var o=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e(46)),r=function(){Promise.all([e.e("common/vendor"),e.e("components/tui-conversation/conversation-item/index")]).then(function(){return resolve(e(152))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/tui-chat/message-list/index").then(function(){return resolve(e(160))}.bind(null,e)).catch(e.oe)},s={data:function(){return{conversationList:[],options:[{text:"删除",style:{backgroundColor:"#F56C6C"}}]}},components:{TUIConversationItem:r,TUIMessageList:a},props:{},onLoad:function(){this.getConversationList(),n.$TUIKit.on(n.$TUIKitEvent.CONVERSATION_LIST_UPDATED,this.onConversationListUpdated)},onUnload:function(){n.$TUIKit.off(n.$TUIKitEvent.SDK_READY,this.onConversationListUpdated)},methods:{deleteConversation:function(t){console.log("删除会话"),n.$TUIKit.deleteConversation(t)},handleRoute:function(t){var e="/pages/TUI-Chat/chat?conversationID=".concat(t);n.navigateTo({url:e})},onConversationListUpdated:function(n){i.default.log("TUI-conversation | onConversationListUpdated  |ok"),this.setData({conversationList:n.data})},getConversationList:function(){var t=this;n.$TUIKit.getConversationList().then((function(n){i.default.log("TUI-conversation | getConversationList | getConversationList-length: ".concat(n.data.conversationList.length)),t.setData({conversationList:n.data.conversationList})}))}}};t.default=s}).call(this,e(2)["default"])},71:function(n,t,e){"use strict";e.r(t);var o=e(72),i=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},72:function(n,t,e){}},[[65,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map