require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/components/tui-chat/message-elements/emoji/index"],{"0283":function(e,t,n){},"1e75":function(e,t,n){"use strict";var i=n("0283"),a=n.n(i);a.a},"2b50":function(e,t,n){"use strict";n.r(t);var i=n("b23c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"478e":function(e,t,n){"use strict";n.r(t);var i=n("81af"),a=n("2b50");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("1e75");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=r.exports},"81af":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},a=[]},b23c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("1b02"),a={data:function(){return{emojiList:[]}},components:{},props:{},beforeMount:function(){for(var e=0;e<i.emojiName.length;e++)this.emojiList.push({emojiName:i.emojiName[e],url:i.emojiUrl+i.emojiMap[i.emojiName[e]]});this.setData({emojiList:this.emojiList})},methods:{handleEnterEmoji:function(e){this.$emit("enterEmoji",{detail:{message:e.currentTarget.dataset.name}})}}};t.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'page_chat/components/tui-chat/message-elements/emoji/index-create-component',
    {
        'page_chat/components/tui-chat/message-elements/emoji/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("478e"))
        })
    },
    [['page_chat/components/tui-chat/message-elements/emoji/index-create-component']]
]);
