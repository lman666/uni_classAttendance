(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tui-chat/message-elements/file-message/index"],{"099d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},2517:function(t,e,n){},"5b2b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Show:!1,filePayload:{}}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(t){this.setData({filePayload:t.payload})},immediate:!0,deep:!0}},methods:{download:function(){this.setData({Show:!0})},downloadConfirm:function(){t.downloadFile({url:this.filePayload.fileUrl,success:function(e){var n=e.tempFilePath;t.openDocument({filePath:n,success:function(){console.log("打开文档成功")}})}})},cancel:function(){this.setData({Show:!1})}}};e.default=n}).call(this,n("543d")["default"])},"8f83":function(t,e,n){"use strict";var a=n("2517"),o=n.n(a);o.a},9678:function(t,e,n){"use strict";n.r(e);var a=n("099d"),o=n("c8d3");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8f83");var u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports},c8d3:function(t,e,n){"use strict";n.r(e);var a=n("5b2b"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-chat/message-elements/file-message/index-create-component',
    {
        'components/tui-chat/message-elements/file-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9678"))
        })
    },
    [['components/tui-chat/message-elements/file-message/index-create-component']]
]);
