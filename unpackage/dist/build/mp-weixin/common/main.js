(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"068e":function(t,e,n){"use strict";n.r(e);var o=n("dd5c");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("544b");var a=n("f0c5"),r=Object(a["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=r.exports},"544b":function(t,e,n){"use strict";var o=n("e0a9"),i=n.n(o);i.a},b025:function(t,e,n){"use strict";(function(t,o){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e24c")),r=i(n("2ee0")),u=i(n("8e7c")),c=i(n("6a9e")),s=n("6ff9"),f=new u.default({id:"iHWefAYqKznuxWjLnr",reportApiSpeed:!0});t.$aegis=f;var l={onLaunch:function(){var e=(0,s.genTestUserSig)("").sdkAppID;t.$aegis.reportEvent({name:"onLaunch",ext1:"onLaunch-success",ext2:"uniTuikitExternal",ext3:"".concat(e)}),t.setStorageSync("TIM_".concat(e,"_isTUIKit"),!0),t.$TUIKit=a.default.create({SDKAppID:1400799335}),t.$TUIKit.registerPlugin({"cos-wx-sdk":r.default}),o.$TIM=t.$TUIKit,t.$TUIKitTIM=a.default,t.$TUIKitEvent=a.default.EVENT,t.$TUIKitVersion=a.default.VERSION,t.$TUIKitTypes=a.default.TYPES,t.$resetLoginData=this.resetLoginData(),t.$TUIKit.on(t.$TUIKitEvent.SDK_READY,this.onSDKReady),t.$TUIKit.on(t.$TUIKitEvent.SDK_NOT_READY,this.onSdkNotReady),t.$TUIKit.on(t.$TUIKitEvent.KICKED_OUT,this.onKickedOut),t.$TUIKit.on(t.$TUIKitEvent.ERROR,this.onTIMError),t.$TUIKit.on(t.$TUIKitEvent.NET_STATE_CHANGE,this.onNetStateChange),t.$TUIKit.on(t.$TUIKitEvent.SDK_RELOAD,this.onSDKReload)},globalData:{userInfo:null,userProfile:null,isTUIKit:!0,headerHeight:0,statusBarHeight:0,SDKAppID:(0,s.genTestUserSig)("").sdkAppID},methods:{resetLoginData:function(){this.globalData.expiresIn="",this.globalData.sessionID="",this.globalData.userInfo={userID:"",userSig:"",token:"",phone:""},this.globalData.userProfile=null,c.default.log("| app |  resetLoginData | globalData: ".concat(this.globalData))},onTIMError:function(){},onSDKReady:function(e){var n=e.name;t.$TUIKitEvent.SDK_READY;t.$emit("isSDKReady",{isSDKReady:!0})},onNetStateChange:function(){},onSDKReload:function(){},onSdkNotReady:function(){},onKickedOut:function(){t.showToast({title:"您被踢下线",icon:"error"}),t.navigateTo({url:"./pages/index/index"})}}};e.default=l}).call(this,n("543d")["default"],n("bc2e")["default"])},dd5c:function(t,e,n){"use strict";n.r(e);var o=n("b025"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},e0a9:function(t,e,n){},f5e1:function(t,e,n){"use strict";(function(t,e,o){var i=n("4ea4"),a=i(n("9523")),r=i(n("7037"));n("cf82"),n("a9ff");var u=i(n("068e")),c=i(n("2562")),s=i(n("a983")),f=i(n("66fd"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}t.__webpack_require_UNI_MP_PLUGIN__=n,f.default.mixin(s.default),e.$showMsg=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"成功",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;e.showToast({title:t,duration:o,icon:n})},f.default.config.productionTip=!1,u.default.mpType="app";try{e.addInterceptor({returnValue:function(t){return function(t){return!!t&&("object"===(0,r.default)(t)||"function"===typeof t)&&"function"===typeof t.then}(t)?new Promise((function(e,n){t.then((function(t){t[0]?n(t[0]):e(t[1])}))})):t}})}catch(p){}var d=new f.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({store:c.default},u.default));o(d).$mount()}).call(this,n("bc2e")["default"],n("543d")["default"],n("543d")["createApp"])}},[["f5e1","common/runtime","common/vendor"]]]);