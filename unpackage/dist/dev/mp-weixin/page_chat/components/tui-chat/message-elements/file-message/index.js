require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-elements/file-message/index"],{426:function(e,n,t){"use strict";t.r(n);var o=t(427),a=t(429);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t(431);var i,c=t(53),u=Object(c["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);u.options.__file="page_chat/components/tui-chat/message-elements/file-message/index.vue",n["default"]=u.exports},427:function(e,n,t){"use strict";t.r(n);var o=t(428);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},428:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));var a=function(){var e=this,n=e.$createElement;e._self._c},r=!1,i=[];a._withStripped=!0},429:function(e,n,t){"use strict";t.r(n);var o=t(430),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},430:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{Show:!1,filePayload:{}}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(e){this.setData({filePayload:e.payload})},immediate:!0,deep:!0}},methods:{download:function(){this.setData({Show:!0})},downloadConfirm:function(){e.downloadFile({url:this.filePayload.fileUrl,success:function(n){var t=n.tempFilePath;e.openDocument({filePath:t,success:function(){console.log("打开文档成功")}})}})},cancel:function(){this.setData({Show:!1})}}};n.default=t}).call(this,t(2)["default"])},431:function(e,n,t){"use strict";t.r(n);var o=t(432),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},432:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/page_chat/components/tui-chat/message-elements/file-message/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-elements/file-message/index-create-component',
    {
        'page_chat/components/tui-chat/message-elements/file-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(426))
        })
    },
    [['page_chat/components/tui-chat/message-elements/file-message/index-create-component']]
]);
