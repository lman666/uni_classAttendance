require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-elements/system-message/index"],{"51d4":function(e,t,n){"use strict";n.r(t);var a=n("ed8c"),c=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=c.a},"57bd":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},c=[]},"6fc0b":function(e,t,n){},"87dc":function(e,t,n){"use strict";var a=n("6fc0b"),c=n.n(a);c.a},dafd:function(e,t,n){"use strict";n.r(t);var a=n("57bd"),c=n("51d4");for(var s in c)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(s);n("87dc");var i=n("f0c5"),o=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"6c31b3b1",null,!1,a["a"],void 0);t["default"]=o.exports},ed8c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("e810"),c=n("24bd"),s={data:function(){return{messageTime:"",renderDom:""}},components:{},props:{message:{type:Object}},watch:{message:{handler:function(e){this.setData({messageTime:(0,c.caculateTimeago)(1e3*e.time),renderDom:(0,a.parseGroupSystemNotice)(e)})},immediate:!0,deep:!0}},methods:{handleClick:function(){var t=this;e.showActionSheet({itemList:["同意","拒绝"],success:function(n){var a={handleAction:"Agree",handleMessage:"欢迎进群",message:t.message};1===n.tapIndex&&(a.handleAction="Reject",a.handleMessage="拒绝申请"),e.$TUIKit.handleGroupApplication(a).then((function(){e.showToast({title:"Agree"===a.handleAction?"已同意申请":"已拒绝申请"})})).catch((function(t){e.showToast({title:t.message||"处理失败",icon:"none"})}))}})}}};t.default=s}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-elements/system-message/index-create-component',
    {
        'page_chat/components/tui-chat/message-elements/system-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dafd"))
        })
    },
    [['page_chat/components/tui-chat/message-elements/system-message/index-create-component']]
]);