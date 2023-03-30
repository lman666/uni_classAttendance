(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/studentPart/studentPart"],{142:function(e,t,n){"use strict";n.r(t);var r=n(143),o=n(145);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n(147);var u,i=n(53),c=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"72556922",null,!1,r["components"],u);c.options.__file="components/studentPart/studentPart.vue",t["default"]=c.exports},143:function(e,t,n){"use strict";n.r(t);var r=n(144);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},144:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));try{r={uniCollapse:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse/uni-collapse").then(n.bind(null,307))},uniCollapseItem:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item").then(n.bind(null,314))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,169))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,176))},uniDrawer:function(){return n.e("uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(n.bind(null,300))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.showPage&&"{}"!==JSON.stringify(e.selectedCourse)),r=n?JSON.stringify(e.selectedCourse):null,o=e.showPage&&"{}"===JSON.stringify(e.selectedCourse);e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:o}})},s=!1,u=[];o._withStripped=!0},145:function(e,t,n){"use strict";n.r(t);var r=n(146),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},146:function(e,t,n){"use strict";(function(e,r){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(28)),u=o(n(30)),i=n(79);function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw s}}}}function a(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={name:"studentPart",props:{userData:{type:Object,default:{}},token:{type:String,default:""}},data:function(){return{active:0,selectedCourse:{},stuCourseInfoList:[],currentTime:"",currentDate:"",withinTheClockingTime:!1,isPunch:!1,interval:{},stuPhoto:"",showPage:!1,imageWidth:"",imageHeight:""}},options:{styleIsolation:"shared"},created:function(){this.getCurrentDate(),setInterval(this.getNowTime,1e3),this.getCourseIdList(this.token,this.userData.code,this.userData.school)},methods:{showDrawer:function(e){this.$refs[e].open()},closeDrawer:function(e){this.$refs[e].close()},change:function(e,t){this[t]=e},punchTheClock:function(){var e=this;return(0,u.default)(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.withinTheClockingTime){t.next=4;break}e.isPunch||("定位打卡"===e.selectedCourse.method?e.positioningPunch():"普通打卡"===e.selectedCourse.method?e.clockSuccessfull():e.takePhoto()),t.next=5;break;case 4:return t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},takePhoto:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(e){t.imageToBase64(e.tempFilePaths[0])}})},imageToBase64:function(e){var t=this;(0,i.pathToBase64)(e).then((function(e){t.faseDetect(e)})).catch((function(e){console.error(e)}))},faseDetect:function(t){var n=this;return(0,u.default)(s.default.mark((function o(){var u,i;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return u=r.importObject("clockHelper"),o.next=3,u.faseDetect(n.token,t);case 3:i=o.sent,201===i.code?n.clockSuccessfull():e.$showMsg(i.message,"error");case 5:case"end":return o.stop()}}),o)})))()},clockSuccessfull:function(){var t=this;return(0,u.default)(s.default.mark((function n(){var o,u,i;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=r.importObject("clockHelper"),u={course_id:t.selectedCourse._id,code:t.userData.code,name:t.userData.name,date:t.currentDate},n.next=4,o.punchTheClock(t.token,u);case 4:i=n.sent,200===i.code?(e.$showMsg(i.message,"success"),t.isPunch=!0):e.$showMsg(i.message,"none");case 6:case"end":return n.stop()}}),n)})))()},positioningPunch:function(){var t=this;e.getLocation({type:"wgs84",success:function(n){console.log(n.longitude,n.latitude),console.log(t.selectedCourse.location.longitude,t.selectedCourse.location.latitude);var r=Math.abs(n.longitude-t.selectedCourse.location.longitude),o=Math.abs(n.latitude-t.selectedCourse.location.latitude);r<=.5&&o<=.5?t.clockSuccessfull():e.$showMsg("当前位置不符合打卡要求","none")}})},activeChanged:function(e){var t=this;this.active=e,clearInterval(this.interval),this.selectedCourse=this.stuCourseInfoList[e],this.$nextTick((function(){t.$refs.collapse.resize()})),this.withinTheClockingTime=!1,this.isPunch=!1,this.checkPunchOrNot()},openLocation:function(t,n){"定位打卡"===this.selectedCourse.method&&t&&n&&e.openLocation({latitude:t,longitude:n,fail:function(){e.$showMsg("地图调用失败","error")}})},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();this.currentDate=t+"."+n+"."+r},getNowTime:function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();t=t<=9?"0"+t:t,n=n<=9?"0"+n:n,r=r<=9?"0"+r:r,this.currentTime=t+":"+n+":"+r},stuGetCourseInfo:function(t,n){return(0,u.default)(s.default.mark((function o(){var u,i;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return u=r.importObject("courseHelper"),o.next=3,u.getCourseInfo(t,n);case 3:if(i=o.sent,403!==i.code){o.next=9;break}return e.$showMsg(i.message,"none"),o.abrupt("return");case 9:return o.abrupt("return",i);case 10:case"end":return o.stop()}}),o)})))()},checkIsWithinTheDate:function(){var e,t=this.selectedCourse.clockList,n=new Date,r=n.getDay(),o=new Map([["日",0],["一",1],["二",2],["三",3],["四",4],["五",5],["六",6]]),s=c(t);try{for(s.s();!(e=s.n()).done;){var u=e.value;if(o.get(u.date)===r)return{isPunchTheClock:!0,timeOfStart:u.timeOfStart,timeOfEnd:u.timeOfEnd}}}catch(i){s.e(i)}finally{s.f()}return{isPunchTheClock:!1}},timeStrToStamp:function(e){var t=+e.split(":")[0],n=+e.split(":")[1],r=3600*t+60*n;return r},checkIsPunchTheClock:function(e){var t=new Date,n=this.timeStrToStamp(e.timeOfStart),r=this.timeStrToStamp(e.timeOfEnd),o=3600*t.getHours()+60*t.getMinutes()+t.getSeconds();this.withinTheClockingTime=n<=o&&r>=o},checkPunchOrNot:function(){var e=this;return(0,u.default)(s.default.mark((function t(){var n,o,u;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.checkIsWithinTheDate(),!n.isPunchTheClock){t.next=7;break}return o=r.importObject("clockHelper"),t.next=5,o.checkAlreadyPunch(e.token,e.currentDate,e.selectedCourse._id,e.userData.code);case 5:u=t.sent,u?e.isPunch=!0:e.interval=setInterval(e.checkIsPunchTheClock,1e3,n);case 7:case"end":return t.stop()}}),t)})))()},getCourseIdList:function(t,n,o){var i=this;return(0,u.default)(s.default.mark((function u(){var a,l,f,d,h,p;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=r.importObject("courseHelper"),s.next=3,a.getCourInfoAccordingToStuInfo(t,n,o);case 3:if(l=s.sent,402!==l.code){s.next=8;break}e.$showMsg(l.message,"error"),s.next=28;break;case 8:f=c(l),s.prev=9,f.s();case 11:if((d=f.n()).done){s.next=19;break}return h=d.value,s.next=15,i.stuGetCourseInfo(t,h);case 15:p=s.sent,i.stuCourseInfoList.push(p);case 17:s.next=11;break;case 19:s.next=24;break;case 21:s.prev=21,s.t0=s["catch"](9),f.e(s.t0);case 24:return s.prev=24,f.f(),s.finish(24);case 27:i.stuCourseInfoList.length?(i.showPage=!0,i.selectedCourse=i.stuCourseInfoList[0],i.checkPunchOrNot()):i.showPage=!0;case 28:case"end":return s.stop()}}),u,null,[[9,21,24,27]])})))()}}};t.default=f}).call(this,n(2)["default"],n(27)["default"])},147:function(e,t,n){"use strict";n.r(t);var r=n(148),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},148:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/studentPart/studentPart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/studentPart/studentPart-create-component',
    {
        'components/studentPart/studentPart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(142))
        })
    },
    [['components/studentPart/studentPart-create-component']]
]);
