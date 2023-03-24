(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tui-chat/message-elements/video-message/index"],{6866:function(e,t,n){"use strict";n.r(t);var a=n("f977"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},"805a":function(e,t,n){"use strict";n.r(t);var a=n("904c"),i=n("6866");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("af4a");var s=n("f0c5"),f=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=f.exports},"904c":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},a1f7:function(e,t,n){},af4a:function(e,t,n){"use strict";var a=n("a1f7"),i=n.n(a);i.a},f977:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("9477")),u={data:function(){return{isPlay:!1,videoIcon:i.default}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(e){this.setData({message:e})},immediate:!0,deep:!0}},methods:{playerHander:function(){e.$emit("videoPlayerHandler",{isPlay:!0,message:this.message})},stopHander:function(){this.isPlay=!1}}};t.default=u}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tui-chat/message-elements/video-message/index-create-component',
    {
        'components/tui-chat/message-elements/video-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("805a"))
        })
    },
    [['components/tui-chat/message-elements/video-message/index-create-component']]
]);
