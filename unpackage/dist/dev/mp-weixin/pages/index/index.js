(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{73:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27);r(t(25));var o=r(t(74));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},74:function(e,n,t){"use strict";t.r(n);var r=t(75),o=t(77);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(80);var u,s=t(53),i=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);i.options.__file="pages/index/index.vue",n["default"]=i.exports},75:function(e,n,t){"use strict";t.r(n);var r=t(76);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},76:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,167))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,176))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,183))},uniDataCheckbox:function(){return t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox").then(t.bind(null,190))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,197))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,u=[];o._withStripped=!0},77:function(e,n,t){"use strict";t.r(n);var r=t(78),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},78:function(e,n,t){"use strict";(function(e,r){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(28)),u=o(t(30)),s=o(t(11)),i=t(55),c=t(79);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,s.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d={data:function(){return{isDisabled:!1,formData:{school:"",name:"",role:0,code:"",photo:[]},userInfo:{avatar:"",nickName:"",openid:""},roles:[{text:"老师",value:0},{text:"学生",value:1}],rules:{school:{rules:[{required:!0,errorMessage:"学校名称不能为空"}]},name:{rules:[{required:!0,errorMessage:"姓名不能为空"}]},code:{rules:[{required:!0,errorMessage:"工号/学号不能为空"}]},photo:{rules:[{required:!0,errorMessage:"请选择照片"}]}},callBy:"attendance"}},computed:l({},(0,i.mapState)("m_user",["userData"])),onLoad:function(e){this.callBy=e.callBy,"{}"!==JSON.stringify(this.userData)&&(this.formData.school=this.userData.school,this.formData.name=this.userData.name,this.formData.role=this.userData.role,this.formData.code=this.userData.code,this.formData.photo=this.userData.photo,this.isDisabled=!0)},methods:l(l({},(0,i.mapMutations)("m_user",["updateUserInfo","updateUserData","updateToken"])),{},{submit:function(n){var t=this;this.$refs[n].validate().then((function(n){1===t.formData.role&&t.imageToBase64(t.formData.photo[0].path),t.updateUserData(t.formData),e.login({provider:"weixin",success:function(e){t.get(e.code)}}),e.getUserProfile({desc:"用于完善资料",success:function(e){t.userInfo.avatar=e.userInfo.avatarUrl,t.userInfo.nickName=e.userInfo.nickName,t.updateUserInfo(t.userInfo),t.saveData(t.userInfo)},fail:function(e){console.log(e)}})})).catch((function(e){console.log("err",e)}))},imageToBase64:function(e){var n=this;(0,c.pathToBase64)(e).then((function(e){n.formData.stuBase64Photo=e})).catch((function(e){console.error(e)}))},get:function(e){var n=this;return(0,u.default)(a.default.mark((function t(){var o,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=r.importObject("getOpenId"),t.next=3,o.exam(e);case 3:u=t.sent,n.userInfo.openid=u.data.openid;case 5:case"end":return t.stop()}}),t)})))()},saveData:function(n){var t=this;return(0,u.default)(a.default.mark((function o(){var u,s,i,c,f;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return u=l(l({},n),{},{code:t.formData.code,school:t.formData.school,role:t.formData.role,name:t.formData.name,stuBase64Photo:t.formData.stuBase64Photo}),s=r.importObject("register"),o.next=4,s.reg(u);case 4:if(i=o.sent,console.log(i),200!==i.code){o.next=15;break}return c=r.importObject("tokenHelper"),o.next=10,c.getToken(t.userInfo.openid);case 10:f=o.sent,t.updateToken(f),t.jump(),o.next=17;break;case 15:e.clearStorage(),e.$showMsg(i.message,"none");case 17:case"end":return o.stop()}}),o)})))()},jump:function(){e.switchTab({url:"/pages/attendance/attendance"})}})};n.default=d}).call(this,t(2)["default"],t(27)["default"])},80:function(e,n,t){"use strict";t.r(n);var r=t(81),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},81:function(e,n,t){}},[[73,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map