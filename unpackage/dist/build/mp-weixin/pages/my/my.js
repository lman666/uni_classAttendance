(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"245e":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,"9e5c"))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,"24c9"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"7cfd"))},uniPopupDialog:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(n.bind(null,"8bf8"))},uniFilePicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(n.bind(null,"2c30"))}},i=function(){var e=this.$createElement;this._self._c},u=[]},"2dc7":function(e,t,n){"use strict";var o=n("cf67"),i=n.n(o);i.a},"536e":function(e,t,n){"use strict";n.r(t);var o=n("245e"),i=n("c254");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("2dc7");var a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"0a3c9180",null,!1,o["a"],void 0);t["default"]=r.exports},b1e9:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("cf82"),n("a9ff");o(n("66fd"));var i=o(n("536e"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},c254:function(e,t,n){"use strict";n.r(t);var o=n("f454"),i=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=i.a},cf67:function(e,t,n){},f454:function(e,t,n){"use strict";(function(e,o){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("2eee")),a=i(n("c973")),r=i(n("9523")),c=i(n("6a9e")),s=n("26cb"),l=n("1ef5");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={data:function(){return{infoListItems:[{icon:n("8248"),title:"学校",detail:""},{icon:n("7c3c"),title:"",detail:""},{icon:n("c85e"),title:"姓名",detail:""}],more:[{icon:n("c102"),title:"更换照片",operate:"openChangePhotoDialog"},{icon:n("3940"),title:"头像昵称",operate:"changeAvatarAndNick"},{icon:n("4045"),title:"退出登录",operate:"dialogToggle"}],photo:[],stuBase64Photo:""}},computed:p({},(0,s.mapState)("m_user",["userInfo","userData","token"])),created:function(){this.infoListItems[0].detail=this.userData.school,this.infoListItems[1].title=0===this.userData.role?"工号":"学号",this.infoListItems[1].detail=this.userData.code,this.infoListItems[2].detail=this.userData.name},methods:p(p({},(0,s.mapMutations)("m_user",["updateUserInfo","updateUserData","updateToken"])),{},{handleClick:function(e){this[e]()},openChangePhotoDialog:function(){this.$refs.changePhoto.open("center")},cancelChange:function(){this.$refs.changePhoto.close()},confirmChange:function(){this.photo.length?(this.imageToBase64(this.photo[0].path),this.$refs.changePhoto.close()):e.$showMsg("请选择照片","none")},imageToBase64:function(e){var t=this;(0,l.pathToBase64)(e).then((function(e){t.stuBase64Photo=e,t.changePhoto()})).catch((function(e){console.error(e)}))},changePhoto:function(){var t=this;return(0,a.default)(u.default.mark((function n(){var i,a;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=o.importObject("register"),n.next=3,i.changePhoto(t.token,t.stuBase64Photo);case 3:a=n.sent,401===a.code?e.$showMsg(a.message,"error"):e.$showMsg(a.message,"success");case 5:case"end":return n.stop()}}),n)})))()},changeAvatarAndNick:function(){e.navigateTo({url:"/page_change/change/change"})},dialogToggle:function(){this.$refs.alertDialog.open()},dialogClose:function(){this.$refs.alertDialog.close()},logOut:function(){var t=this;c.default.log("| TUI-User-Center | mine  | quit-logout "),e.$TUIKit.logout().then((function(){t.updateUserInfo({}),t.updateUserData({}),t.updateToken(""),e.clearStorage(),e.reLaunch({url:"/page_index/index/index",success:function(){e.$showMsg("退出成功","none")}})}))}})};t.default=h}).call(this,n("543d")["default"],n("a9ff")["default"])}},[["b1e9","common/runtime","common/vendor"]]]);