(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/studentPart/studentPart"],{"17d5":function(e,t,n){"use strict";n.r(t);var r=n("6f0c"),o=n("8198");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("7bf8");var i=n("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"b79a5b94",null,!1,r["a"],void 0);t["default"]=u.exports},"2d34":function(e,t,n){"use strict";(function(e,r){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("2eee")),i=o(n("c973")),u=o(n("9523")),c=n("1ef5"),a=n("26cb");function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw s}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"studentPart",props:{userData:{type:Object,default:{}},token:{type:String,default:""}},data:function(){return{active:0,selectedCourse:{},stuCourseInfoList:[],currentTime:"",currentDate:"",withinTheClockingTime:!1,isPunch:!1,interval:{},stuPhoto:"",viewWidth:"",viewHeight:"",showPage:!1,isLate:!1,teaInfoOfSelCourse:{}}},options:{styleIsolation:"shared"},computed:d({},(0,a.mapState)("m_stuCourseInfo",["m_stuCourseInfoList"])),created:function(){this.getCurrentDate(),setInterval(this.getNowTime,1e3),this.getCourseIdList(this.token,this.userData.code,this.userData.school)},methods:d(d({},(0,a.mapMutations)("m_stuCourseInfo",["updateM_stuCourseInfoList"])),{},{chatToTea:function(t){e.$TUIKit.getUserProfile({userIDList:[t]}).then((function(t){t.data.length>0?e.navigateTo({url:"/page_chat/TUI-Chat/chat?conversationID=C2C".concat(t.data[0].userID)}):e.$showMsg("用户不存在","none")}))},showDrawer:function(e){this.$refs[e].open()},closeDrawer:function(e){this.$refs[e].close()},change:function(e,t){this[t]=e},punchTheClock:function(){var e=this;return(0,i.default)(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.withinTheClockingTime){t.next=4;break}e.isPunch||("定位打卡"===e.selectedCourse.method?e.positioningPunch():"普通打卡"===e.selectedCourse.method?e.clockSuccessfull():e.takePhoto()),t.next=5;break;case 4:return t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},takePhoto:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(e){t.imageToBase64(e.tempFilePaths[0])}})},autoView:function(t){var n=this;e.getSystemInfo({complete:function(e){n.viewWidth=e.windowWidth+"px",n.viewHeight=e.windowHeight+"px"}})},imageToBase64:function(e){var t=this;(0,c.pathToBase64)(e).then((function(e){t.faseDetect(e)})).catch((function(e){console.error(e)}))},faseDetect:function(t){var n=this;return(0,i.default)(s.default.mark((function o(){var i,u;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=r.importObject("clockHelper"),o.next=3,i.faseDetect(n.token,t);case 3:u=o.sent,201===u.code?n.clockSuccessfull():e.$showMsg(u.message,"error");case 5:case"end":return o.stop()}}),o)})))()},clockSuccessfull:function(){var t=this;return(0,i.default)(s.default.mark((function n(){var o,i,u;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=r.importObject("clockHelper"),i={course_id:t.selectedCourse._id,code:t.userData.code,name:t.userData.name,school:t.userData.school,date:t.currentDate,time:t.currentTime,isLate:t.isLate},n.next=4,o.punchTheClock(t.token,i);case 4:u=n.sent,200===u.code?(e.$showMsg(u.message,"success"),t.isPunch=!0):e.$showMsg(u.message,"none");case 6:case"end":return n.stop()}}),n)})))()},positioningPunch:function(){var t=this;e.getLocation({type:"wgs84",success:function(n){console.log(n.longitude,n.latitude),console.log(t.selectedCourse.location.longitude,t.selectedCourse.location.latitude);var r=Math.abs(n.longitude-t.selectedCourse.location.longitude),o=Math.abs(n.latitude-t.selectedCourse.location.latitude);r<=.5&&o<=.5?t.clockSuccessfull():e.$showMsg("当前位置不符合打卡要求","none")}})},getTeaInfo:function(e){var t=this;return(0,i.default)(s.default.mark((function n(){var o,i;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=r.importObject("courseHelper"),n.next=3,o.getTeaInfo(t.token,e);case 3:i=n.sent,t.teaInfoOfSelCourse=i.data[0];case 5:case"end":return n.stop()}}),n)})))()},activeChanged:function(e){var t=this;this.active=e,clearInterval(this.interval),this.selectedCourse=this.stuCourseInfoList[e],this.getTeaInfo(this.selectedCourse.openid),this.$nextTick((function(){t.$refs.collapse.resize()})),this.withinTheClockingTime=!1,this.isPunch=!1,this.isLate=!1,this.checkPunchOrNot()},openLocation:function(t,n){"定位打卡"===this.selectedCourse.method&&t&&n&&e.openLocation({latitude:t,longitude:n,fail:function(){e.$showMsg("地图调用失败","error")}})},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();this.currentDate=t+"."+n+"."+r},getNowTime:function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();t=t<=9?"0"+t:t,n=n<=9?"0"+n:n,r=r<=9?"0"+r:r,this.currentTime=t+":"+n+":"+r},stuGetCourseInfo:function(t,n){return(0,i.default)(s.default.mark((function o(){var i,u;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=r.importObject("courseHelper"),o.next=3,i.getCourseInfo(t,n);case 3:if(u=o.sent,403!==u.code){o.next=9;break}return e.$showMsg(u.message,"none"),o.abrupt("return");case 9:return o.abrupt("return",u);case 10:case"end":return o.stop()}}),o)})))()},checkIsWithinTheDate:function(){var e,t=this.selectedCourse.clockList,n=new Date,r=n.getDay(),o=new Map([["日",0],["一",1],["二",2],["三",3],["四",4],["五",5],["六",6]]),s=l(t);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(o.get(i.date)===r)return{isPunchTheClock:!0,timeOfStart:i.timeOfStart,timeOfEnd:i.timeOfEnd}}}catch(u){s.e(u)}finally{s.f()}return{isPunchTheClock:!1}},timeStrToStamp:function(e){var t=+e.split(":")[0],n=+e.split(":")[1],r=3600*t+60*n;return r},checkIsPunchTheClock:function(e){var t=new Date,n=this.timeStrToStamp(e.timeOfStart),r=this.timeStrToStamp(e.timeOfEnd),o=3600*t.getHours()+60*t.getMinutes()+t.getSeconds();(o>=n-900&&o<=n||n<=o)&&r>=o?(this.withinTheClockingTime=!0,this.isLate=!(o>=n-900&&o<=n)):this.withinTheClockingTime=!1},checkPunchOrNot:function(){var e=this;return(0,i.default)(s.default.mark((function t(){var n,o,i;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.checkIsWithinTheDate(),!n.isPunchTheClock){t.next=7;break}return o=r.importObject("clockHelper"),t.next=5,o.checkAlreadyPunch(e.token,e.currentDate,e.selectedCourse._id,e.userData.code);case 5:i=t.sent,i?e.isPunch=!0:e.interval=setInterval(e.checkIsPunchTheClock,1e3,n);case 7:case"end":return t.stop()}}),t)})))()},getCourseIdList:function(t,n,o){var u=this;return(0,i.default)(s.default.mark((function i(){var c,a,f,h,d,p;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return c=r.importObject("courseHelper"),s.next=3,c.getCourInfoAccordingToStuInfo(t,n,o);case 3:if(a=s.sent,402!==a.code){s.next=8;break}e.$showMsg(a.message,"error"),s.next=28;break;case 8:f=l(a),s.prev=9,f.s();case 11:if((h=f.n()).done){s.next=19;break}return d=h.value,s.next=15,u.stuGetCourseInfo(t,d);case 15:p=s.sent,u.stuCourseInfoList.push(p);case 17:s.next=11;break;case 19:s.next=24;break;case 21:s.prev=21,s.t0=s["catch"](9),f.e(s.t0);case 24:return s.prev=24,f.f(),s.finish(24);case 27:u.stuCourseInfoList.length?(u.updateM_stuCourseInfoList(u.stuCourseInfoList),u.selectedCourse=u.stuCourseInfoList[0],u.getTeaInfo(u.selectedCourse.openid),u.checkPunchOrNot(),u.showPage=!0):u.showPage=!0;case 28:case"end":return s.stop()}}),i,null,[[9,21,24,27]])})))()}})};t.default=p}).call(this,n("543d")["default"],n("a9ff")["default"])},"4af2":function(e,t,n){},"6f0c":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var r={uniCollapse:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse/uni-collapse").then(n.bind(null,"b0d7"))},uniCollapseItem:function(){return n.e("uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"9c91"))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,"9e5c"))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,"24c9"))},uniDrawer:function(){return n.e("uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(n.bind(null,"68d6"))}},o=function(){var e=this.$createElement,t=(this._self._c,this.showPage&&"{}"!==JSON.stringify(this.selectedCourse)),n=t?JSON.stringify(this.selectedCourse):null,r=this.showPage&&"{}"===JSON.stringify(this.selectedCourse);this.$mp.data=Object.assign({},{$root:{g0:t,g1:n,g2:r}})},s=[]},"7bf8":function(e,t,n){"use strict";var r=n("4af2"),o=n.n(r);o.a},8198:function(e,t,n){"use strict";n.r(t);var r=n("2d34"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/studentPart/studentPart-create-component',
    {
        'components/studentPart/studentPart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("17d5"))
        })
    },
    [['components/studentPart/studentPart-create-component']]
]);
