(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/studentPart/studentPart"],{154:function(e,t,n){"use strict";n.r(t);var r=n(155),o=n(157);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n(159);var i,u=n(53),c=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"72556922",null,!1,r["components"],i);c.options.__file="components/studentPart/studentPart.vue",t["default"]=c.exports},155:function(e,t,n){"use strict";n.r(t);var r=n(156);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},156:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));try{r={uniCollapse:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse/uni-collapse").then(n.bind(null,332))},uniCollapseItem:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item").then(n.bind(null,339))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,181))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,188))},uniDrawer:function(){return n.e("uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(n.bind(null,325))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.showPage&&"{}"!==JSON.stringify(e.selectedCourse)),r=n?JSON.stringify(e.selectedCourse):null,o=e.showPage&&"{}"===JSON.stringify(e.selectedCourse);e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:o}})},s=!1,i=[];o._withStripped=!0},157:function(e,t,n){"use strict";n.r(t);var r=n(158),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},158:function(e,t,n){"use strict";(function(e,r){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(28)),i=o(n(30)),u=o(n(11)),c=n(80),a=n(55);function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw s}}}}function f(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={name:"studentPart",props:{userData:{type:Object,default:{}},token:{type:String,default:""}},data:function(){return{active:0,selectedCourse:{},stuCourseInfoList:[],currentTime:"",currentDate:"",withinTheClockingTime:!1,isPunch:!1,interval:{},stuPhoto:"",viewWidth:"",viewHeight:"",showPage:!1,isLate:!1,teaInfoOfSelCourse:{}}},options:{styleIsolation:"shared"},computed:p({},(0,a.mapState)("m_stuCourseInfo",["m_stuCourseInfoList"])),created:function(){this.getCurrentDate(),setInterval(this.getNowTime,1e3),this.getCourseIdList(this.token,this.userData.code,this.userData.school)},methods:p(p({},(0,a.mapMutations)("m_stuCourseInfo",["updateM_stuCourseInfoList"])),{},{chatToTea:function(t){e.$TUIKit.getUserProfile({userIDList:[t]}).then((function(t){t.data.length>0?e.navigateTo({url:"/page_chat/TUI-Chat/chat?conversationID=C2C".concat(t.data[0].userID)}):e.$showMsg("用户不存在","none")}))},showDrawer:function(e){this.$refs[e].open()},closeDrawer:function(e){this.$refs[e].close()},change:function(e,t){this[t]=e},punchTheClock:function(){var e=this;return(0,i.default)(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.withinTheClockingTime){t.next=4;break}e.isPunch||("定位打卡"===e.selectedCourse.method?e.positioningPunch():"普通打卡"===e.selectedCourse.method?e.clockSuccessfull():e.takePhoto()),t.next=5;break;case 4:return t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},takePhoto:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(e){t.imageToBase64(e.tempFilePaths[0])}})},autoView:function(t){var n=this;e.getSystemInfo({complete:function(e){n.viewWidth=e.windowWidth+"px",n.viewHeight=e.windowHeight+"px"}})},imageToBase64:function(e){var t=this;(0,c.pathToBase64)(e).then((function(e){t.faseDetect(e)})).catch((function(e){console.error(e)}))},faseDetect:function(t){var n=this;return(0,i.default)(s.default.mark((function o(){var i,u;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=r.importObject("clockHelper"),o.next=3,i.faseDetect(n.token,t);case 3:u=o.sent,201===u.code?n.clockSuccessfull():e.$showMsg(u.message,"error");case 5:case"end":return o.stop()}}),o)})))()},clockSuccessfull:function(){var t=this;return(0,i.default)(s.default.mark((function n(){var o,i,u;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=r.importObject("clockHelper"),i={course_id:t.selectedCourse._id,code:t.userData.code,name:t.userData.name,school:t.userData.school,date:t.currentDate,time:t.currentTime,isLate:t.isLate},n.next=4,o.punchTheClock(t.token,i);case 4:u=n.sent,200===u.code?(e.$showMsg(u.message,"success"),t.isPunch=!0):e.$showMsg(u.message,"none");case 6:case"end":return n.stop()}}),n)})))()},positioningPunch:function(){var t=this;e.getLocation({type:"wgs84",success:function(n){console.log(n.longitude,n.latitude),console.log(t.selectedCourse.location.longitude,t.selectedCourse.location.latitude);var r=Math.abs(n.longitude-t.selectedCourse.location.longitude),o=Math.abs(n.latitude-t.selectedCourse.location.latitude);r<=.5&&o<=.5?t.clockSuccessfull():e.$showMsg("当前位置不符合打卡要求","none")}})},getTeaInfo:function(e){var t=this;return(0,i.default)(s.default.mark((function n(){var o,i;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=r.importObject("courseHelper"),n.next=3,o.getTeaInfo(t.token,e);case 3:i=n.sent,t.teaInfoOfSelCourse=i.data[0];case 5:case"end":return n.stop()}}),n)})))()},activeChanged:function(e){var t=this;this.active=e,clearInterval(this.interval),this.selectedCourse=this.stuCourseInfoList[e],this.getTeaInfo(this.selectedCourse.openid),this.$nextTick((function(){t.$refs.collapse.resize()})),this.withinTheClockingTime=!1,this.isPunch=!1,this.isLate=!1,this.checkPunchOrNot()},openLocation:function(t,n){"定位打卡"===this.selectedCourse.method&&t&&n&&e.openLocation({latitude:t,longitude:n,fail:function(){e.$showMsg("地图调用失败","error")}})},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();this.currentDate=t+"."+n+"."+r},getNowTime:function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();t=t<=9?"0"+t:t,n=n<=9?"0"+n:n,r=r<=9?"0"+r:r,this.currentTime=t+":"+n+":"+r},stuGetCourseInfo:function(t,n){return(0,i.default)(s.default.mark((function o(){var i,u;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=r.importObject("courseHelper"),o.next=3,i.getCourseInfo(t,n);case 3:if(u=o.sent,403!==u.code){o.next=9;break}return e.$showMsg(u.message,"none"),o.abrupt("return");case 9:return o.abrupt("return",u);case 10:case"end":return o.stop()}}),o)})))()},checkIsWithinTheDate:function(){var e,t=this.selectedCourse.clockList,n=new Date,r=n.getDay(),o=new Map([["日",0],["一",1],["二",2],["三",3],["四",4],["五",5],["六",6]]),s=l(t);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(o.get(i.date)===r)return{isPunchTheClock:!0,timeOfStart:i.timeOfStart,timeOfEnd:i.timeOfEnd}}}catch(u){s.e(u)}finally{s.f()}return{isPunchTheClock:!1}},timeStrToStamp:function(e){var t=+e.split(":")[0],n=+e.split(":")[1],r=3600*t+60*n;return r},checkIsPunchTheClock:function(e){var t=new Date,n=this.timeStrToStamp(e.timeOfStart),r=this.timeStrToStamp(e.timeOfEnd),o=3600*t.getHours()+60*t.getMinutes()+t.getSeconds();(o>=n-900&&o<=n||n<=o)&&r>=o?(this.withinTheClockingTime=!0,this.isLate=!(o>=n-900&&o<=n)):this.withinTheClockingTime=!1},checkPunchOrNot:function(){var e=this;return(0,i.default)(s.default.mark((function t(){var n,o,i;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.checkIsWithinTheDate(),!n.isPunchTheClock){t.next=7;break}return o=r.importObject("clockHelper"),t.next=5,o.checkAlreadyPunch(e.token,e.currentDate,e.selectedCourse._id,e.userData.code);case 5:i=t.sent,i?e.isPunch=!0:e.interval=setInterval(e.checkIsPunchTheClock,1e3,n);case 7:case"end":return t.stop()}}),t)})))()},getCourseIdList:function(t,n,o){var u=this;return(0,i.default)(s.default.mark((function i(){var c,a,f,d,h,p;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return c=r.importObject("courseHelper"),s.next=3,c.getCourInfoAccordingToStuInfo(t,n,o);case 3:if(a=s.sent,402!==a.code){s.next=8;break}e.$showMsg(a.message,"error"),s.next=28;break;case 8:f=l(a),s.prev=9,f.s();case 11:if((d=f.n()).done){s.next=19;break}return h=d.value,s.next=15,u.stuGetCourseInfo(t,h);case 15:p=s.sent,u.stuCourseInfoList.push(p);case 17:s.next=11;break;case 19:s.next=24;break;case 21:s.prev=21,s.t0=s["catch"](9),f.e(s.t0);case 24:return s.prev=24,f.f(),s.finish(24);case 27:u.stuCourseInfoList.length?(u.updateM_stuCourseInfoList(u.stuCourseInfoList),u.selectedCourse=u.stuCourseInfoList[0],u.getTeaInfo(u.selectedCourse.openid),u.checkPunchOrNot(),u.showPage=!0):u.showPage=!0;case 28:case"end":return s.stop()}}),i,null,[[9,21,24,27]])})))()}})};t.default=m}).call(this,n(2)["default"],n(27)["default"])},159:function(e,t,n){"use strict";n.r(t);var r=n(160),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},160:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/studentPart/studentPart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/studentPart/studentPart-create-component',
    {
        'components/studentPart/studentPart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(154))
        })
    },
    [['components/studentPart/studentPart-create-component']]
]);
