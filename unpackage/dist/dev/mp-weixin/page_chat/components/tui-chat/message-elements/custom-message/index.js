require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-elements/custom-message/index"],{397:function(e,t,a){"use strict";a.r(t);var n=a(398),r=a(400);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a(402);var i,s=a(53),c=Object(s["default"])(r["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],i);c.options.__file="page_chat/components/tui-chat/message-elements/custom-message/index.vue",t["default"]=c.exports},398:function(e,t,a){"use strict";a.r(t);var n=a(399);a.d(t,"render",(function(){return n["render"]})),a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(t,"components",(function(){return n["components"]}))},399:function(e,t,a){"use strict";var n;a.r(t),a.d(t,"render",(function(){return r})),a.d(t,"staticRenderFns",(function(){return i})),a.d(t,"recyclableRender",(function(){return o})),a.d(t,"components",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},o=!1,i=[];r._withStripped=!0},400:function(e,t,a){"use strict";a.r(t);var n=a(401),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},401:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(165),r={data:function(){return{}},components:{},props:{message:{type:Object,default:function(){}},isMine:{type:Boolean,default:!0}},watch:{message:{handler:function(e){this.setData({message:e,renderDom:this.parseCustom(e)})},immediate:!0,deep:!0}},methods:{extractCallingInfoFromMessage:function(e){var t=JSON.parse(e.payload.data);if(1!==t.businessID)return"";var a=JSON.parse(t.data);switch(t.actionType){case 1:return a.call_end>=0&&!t.groupID?"通话时长：".concat((0,n.formateTime)(a.call_end)):t.groupID?"结束群聊":a.data&&"switchToAudio"===a.data.cmd?"切换语音通话":a.data&&"switchToVideo"===a.data.cmd?"切换视频通话":"发起通话";case 2:return"取消通话";case 3:return a.data&&"switchToAudio"===a.data.cmd?"切换语音通话":a.data&&"switchToVideo"===a.data.cmd?"切换视频通话":"已接听";case 4:return"拒绝通话";case 5:return a.data&&"switchToAudio"===a.data.cmd?"切换语音通话":a.data&&"switchToVideo"===a.data.cmd?"切换视频通话":"无应答";default:return""}},parseCustom:function(e){if("order"===e.payload.data){var t=JSON.parse(e.payload.extension),a=[{type:"order",name:"custom",title:t.title||"",imageUrl:t.imageUrl||"",price:t.price||0,description:e.payload.description}];return a}if("consultion"===e.payload.data){var n=JSON.parse(e.payload.extension),r=[{type:"consultion",title:n.title||"",item:n.item||0,description:n.description}];return r}if("evaluation"===e.payload.data){var o=JSON.parse(e.payload.extension),i=[{type:"evaluation",title:e.payload.description,score:o.score,description:o.comment}];return i}if("group_create"===e.payload.data){var s=[{type:"group_create",text:e.payload.extension}];return s}var c=JSON.parse(e.payload.data);if(1===c.businessID){if("GROUP"===e.conversationType){5===e.payload.data.actionType&&(e.nick=e.payload.data.inviteeList?e.payload.data.inviteeList.join(","):e.from);var d=this.extractCallingInfoFromMessage(e),u="".concat(d),l=[{type:"groupCalling",text:u,userIDList:[]}];return l}if("C2C"===e.conversationType){var p=this.extractCallingInfoFromMessage(e),f=[{type:"c2cCalling",text:p}];return f}}if("group_create"===e.payload.data){var m=[{type:"group_create",text:e.payload.extension}];return m}return[{type:"notSupport",text:"[自定义消息]"}]}}};t.default=r},402:function(e,t,a){"use strict";a.r(t);var n=a(403),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},403:function(e,t,a){}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/page_chat/components/tui-chat/message-elements/custom-message/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-elements/custom-message/index-create-component',
    {
        'page_chat/components/tui-chat/message-elements/custom-message/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(397))
        })
    },
    [['page_chat/components/tui-chat/message-elements/custom-message/index-create-component']]
]);
