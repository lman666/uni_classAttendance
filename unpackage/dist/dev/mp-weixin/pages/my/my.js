(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{73:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27);o(t(25));var i=o(t(74));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},74:function(e,n,t){"use strict";t.r(n);var o=t(75),i=t(77);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(86);var u,c=t(53),s=Object(c["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"0be17cc6",null,!1,o["components"],u);s.options.__file="pages/my/my.vue",n["default"]=s.exports},75:function(e,n,t){"use strict";t.r(n);var o=t(76);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},76:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,166))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,173))},uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,180))},uniPopupDialog:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(t.bind(null,187))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,199))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},r=!1,u=[];i._withStripped=!0},77:function(e,n,t){"use strict";t.r(n);var o=t(78),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},78:function(e,n,t){"use strict";(function(e,o){var i=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(28)),u=i(t(30)),c=i(t(11)),s=i(t(46)),a=t(55),l=t(79);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,c.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={data:function(){return{infoListItems:[{icon:t(80),title:"学校",detail:""},{icon:t(81),title:"",detail:""},{icon:t(82),title:"姓名",detail:""}],more:[{icon:t(83),title:"更换照片",operate:"openChangePhotoDialog"},{icon:t(84),title:"头像昵称",operate:"changeAvatarAndNick"},{icon:t(85),title:"退出登录",operate:"dialogToggle"}],photo:[],stuBase64Photo:""}},computed:d({},(0,a.mapState)("m_user",["userInfo","userData","token"])),created:function(){this.infoListItems[0].detail=this.userData.school,this.infoListItems[1].title=0===this.userData.role?"工号":"学号",this.infoListItems[1].detail=this.userData.code,this.infoListItems[2].detail=this.userData.name},methods:{handleClick:function(e){this[e]()},openChangePhotoDialog:function(){this.$refs.changePhoto.open("center")},cancelChange:function(){this.$refs.changePhoto.close()},confirmChange:function(){this.photo.length?(this.imageToBase64(this.photo[0].path),this.$refs.changePhoto.close()):e.$showMsg("请选择照片","none")},imageToBase64:function(e){var n=this;(0,l.pathToBase64)(e).then((function(e){n.stuBase64Photo=e,n.changePhoto()})).catch((function(e){console.error(e)}))},changePhoto:function(){var n=this;return(0,u.default)(r.default.mark((function t(){var i,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=o.importObject("register"),t.next=3,i.changePhoto(n.token,n.stuBase64Photo);case 3:u=t.sent,401===u.code?e.$showMsg(u.message,"error"):e.$showMsg(u.message,"success");case 5:case"end":return t.stop()}}),t)})))()},changeAvatarAndNick:function(){console.log("changeAvatarAndNick"),e.navigateTo({url:"/page_change/change/change"})},dialogToggle:function(){this.$refs.alertDialog.open()},dialogClose:function(){this.$refs.alertDialog.close()},logOut:function(){s.default.log("| TUI-User-Center | mine  | quit-logout "),e.$TUIKit.logout().then((function(){e.clearStorage(),e.reLaunch({url:"../index/index",success:function(){e.$showMsg("退出成功","none")}})}))}}};n.default=p}).call(this,t(2)["default"],t(27)["default"])},86:function(e,n,t){"use strict";t.r(n);var o=t(87),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},87:function(e,n,t){}},[[73,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map