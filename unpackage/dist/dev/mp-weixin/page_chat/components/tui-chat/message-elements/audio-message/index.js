require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-elements/audio-message/index"],{388:function(e,n,t){"use strict";t.r(n);var o=t(389),r=t(391);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(393);var u,a=t(53),s=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);s.options.__file="page_chat/components/tui-chat/message-elements/audio-message/index.vue",n["default"]=s.exports},389:function(e,n,t){"use strict";t.r(n);var o=t(390);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},390:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=!1,u=[];r._withStripped=!0},391:function(e,n,t){"use strict";t.r(n);var o=t(392),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},392:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{audio:{}}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(e){this.setData({message:e})},immediate:!0,deep:!0}},beforeMount:function(){this.audio=e.createInnerAudioContext(),this.audio.onPlay((function(){console.log("开始播放")})),this.audio.onEnded((function(){console.log("停止播放")})),this.audio.onError((function(n){console.error(n,"onError"),e.showToast({icon:"none",title:"该音频暂不支持播放"})}))},methods:{handlePlayAudioMessage:function(){this.audio.src=this.message.payload.url,this.audio.play()}}};n.default=t}).call(this,t(2)["default"])},393:function(e,n,t){"use strict";t.r(n);var o=t(394),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},394:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/page_chat/components/tui-chat/message-elements/audio-message/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-elements/audio-message/index-create-component',
    {
        'page_chat/components/tui-chat/message-elements/audio-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(388))
        })
    },
    [['page_chat/components/tui-chat/message-elements/audio-message/index-create-component']]
]);
