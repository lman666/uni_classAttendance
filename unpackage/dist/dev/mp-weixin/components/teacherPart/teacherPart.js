(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/teacherPart/teacherPart"],{126:function(e,t,n){"use strict";n.r(t);var o=n(127),i=n(129);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n(131);var r,u=n(53),c=Object(u["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"835de820",null,!1,o["components"],r);c.options.__file="components/teacherPart/teacherPart.vue",t["default"]=c.exports},127:function(e,t,n){"use strict";n.r(t);var o=n(128);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},128:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return o}));try{o={uniCard:function(){return n.e("uni_modules/uni-card/components/uni-card/uni-card").then(n.bind(null,253))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,206))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,213))},uniDatetimePicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(n.bind(null,260))},circleProgress:function(){return n.e("components/circleProgress/circleProgress").then(n.bind(null,272))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,220))},uniSwipeAction:function(){return n.e("uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action").then(n.bind(null,279))},uniSwipeActionItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item")]).then(n.bind(null,140))},clockItem:function(){return n.e("components/clockItem/clockItem").then(n.bind(null,284))},uniPopupDialog:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(n.bind(null,227))},uniDrawer:function(){return n.e("uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(n.bind(null,291))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,n=(e._self._c,JSON.stringify(e.selectedCourse)),o=e.showPage&&"{}"!==JSON.stringify(e.selectedCourse),i=o?JSON.stringify(e.selectedCourse):null,s=e.showPage&&"[]"===JSON.stringify(e.courseList);e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i,g3:s}})},s=!1,r=[];i._withStripped=!0},129:function(e,t,n){"use strict";n.r(t);var o=n(130),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a},130:function(e,t,n){"use strict";(function(e,o,i){var s=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(28)),u=s(n(30)),c=s(n(11)),a=n(55);function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){u=!0,s=e},f:function(){try{r||null==n.return||n.return()}finally{if(u)throw s}}}}function f(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){n.e("components/clockItem/clockItem").then(function(){return resolve(n(284))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/circleProgress/circleProgress").then(function(){return resolve(n(272))}.bind(null,n)).catch(n.oe)},v={components:{clockItem:m,circleProgress:g},data:function(){for(var e=new Date,t=[],n=[],o=e.getHours(),i=e.getHours(),s=[],r=[],u=e.getMinutes(),c=e.getMinutes(),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),l=0;l<=23;l++)l<10?(t.push("0"+l),n.push("0"+l)):(t.push(""+l),n.push(""+l));for(var f=0;f<=59;f++)f<10?(s.push("0"+f),r.push("0"+f)):(s.push(""+f),r.push(""+f));return{title:"picker-view",hoursOfStart:t,hoursOfEnd:n,hourOfStart:o,hourOfEnd:i,minutesOfStart:s,minutesOfEnd:r,minuteOfStart:u,minuteOfEnd:c,valueOfStart:[o,u],valueOfEnd:[i,c],indicatorStyle:"height: 40px;",showRight:!1,showLeft:!1,courseList:[],selectedCourse:{},active:0,isEdit:!1,isShadow:!1,mode:"",note:"",start:a,scrollTop:0,clockList:[],methodOfClock:"",staff:[],fileName:"",location:{},showPage:!1,isUploadMethod:!1,isUploadTime:!1,isUploadStaff:!1,currentDate:"",selDate:"",showPunResCom:!1,punchResInfo:{},alreadyPunchCount:0,totalStaffCount:0,options:[{text:"删除",style:{backgroundColor:"#007aff"}}],viewWidth:"",viewHeight:""}},options:{styleIsolation:"shared"},computed:p({},(0,a.mapState)("m_user",["userInfo","token","userData"])),created:function(){var t=this;e.$on("isSDKReady",(function(e){t.updateMyProfile()})),this.getCurrentDate(),this.getCourseList(this.token)},methods:(0,c.default)({updateMyProfile:function(){e.$TUIKit.updateMyProfile({avatar:this.userInfo.avatar,nick:this.userInfo.nickName}).then((function(e){console.log("update",e.data)})).catch((function(e){console.warn("updateMyProfile error:",e)}))},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();this.currentDate=t+"-"+n+"-"+o,this.selDate=this.currentDate},confirmDate:function(e){this.selDate=e,this.calculatePunchResult()},lookUpPunchRes:function(){"{}"!==JSON.stringify(this.punchResInfo)&&e.navigateTo({url:"/pages/lookUpPunchRes/lookUpPunchRes?punchResInfo="+encodeURIComponent(JSON.stringify(this.punchResInfo))})},isShowPunchResComponent:function(){!this.isEdit&&this.isUploadMethod&&this.isUploadStaff&&this.isUploadTime?(this.showPunResCom=!0,this.calculatePunchResult()):this.showPunResCom=!1},calculatePunchResult:function(){this.punchResInfo={},this.alreadyPunchCount=0,this.totalStaffCount=0;var e,t=new Date(this.selDate),n=t.getDay(),o=!1,i=new Map([[0,"日"],[1,"一"],[2,"二"],[3,"三"],[4,"四"],[5,"五"],[6,"六"]]),s=l(this.clockList);try{for(s.s();!(e=s.n()).done;){var r=e.value;if(i.get(n)===r.date){o=!0;break}}}catch(c){s.e(c)}finally{s.f()}if(o){var u=this.calculateAlreadyPunchStaffCount();u.punch&&(this.alreadyPunchCount=u.punch.punchList.length),this.getPunchList(this.selectedCourse.staffList,u),this.totalStaffCount=this.selectedCourse.staffList.length}},getPunchList:function(e,t){this.punchResInfo.punchResList=e,this.punchResInfo.course_id=this.selectedCourse._id,this.punchResInfo.date=t.date;var n,o=l(this.punchResInfo.punchResList);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.isPunch=!1}}catch(h){o.e(h)}finally{o.f()}if(t.punch){var s,r=l(t.punch.punchList);try{for(r.s();!(s=r.n()).done;){var u,c=s.value,a=l(this.punchResInfo.punchResList);try{for(a.s();!(u=a.n()).done;){var f=u.value;c.code===f.code&&(f.isPunch=!0)}}catch(h){a.e(h)}finally{a.f()}}}catch(h){r.e(h)}finally{r.f()}}},calculateAlreadyPunchStaffCount:function(){var e=this.selDate.split("-")[0],t=+this.selDate.split("-")[1],n=+this.selDate.split("-")[2],o=e+"."+t+"."+n,i={};if(i.date=o,this.selectedCourse.alreadyPunchStaffList){var s,r=l(this.selectedCourse.alreadyPunchStaffList);try{for(r.s();!(s=r.n()).done;){var u=s.value;if(o===u.date){i.punch=u;break}}}catch(c){r.e(c)}finally{r.f()}}return i},autoView:function(t){var n=this;e.getSystemInfo({complete:function(e){n.viewWidth=e.windowWidth+"px",n.viewHeight=e.windowHeight-42.5+"px"}})},showDrawer:function(e){this.isEdit||this.$refs[e].open()},closeDrawer:function(e){this.$refs[e].close()},change:function(e,t){this[t]=e},addCourse:function(){this.isEdit||this.$refs.inputDialog.open()},dialogInputConfirm:function(t){var n=this;return(0,u.default)(r.default.mark((function i(){var s,u,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.hideLoading(),n.$refs.inputDialog.close(),s={token:n.token,courseName:t},u=o.importObject("courseHelper"),i.next=6,u.addNewCourse(s);case 6:c=i.sent,200===c.code?e.$showMsg(c.message,"success"):(c.code,e.$showMsg(c.message,"error")),n.getCourseList(n.token);case 9:case"end":return i.stop()}}),i)})))()},getCourseList:function(t){var n=this;return(0,u.default)(r.default.mark((function i(){var s,u;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=o.importObject("courseHelper"),i.next=3,s.getCourseList(t);case 3:u=i.sent,201===u.code?u.data.length&&(n.courseList=u.data,n.getCourseInfo(t,n.courseList[0]._id)):402===u.code&&e.$showMsg(u.message,"error");case 5:case"end":return i.stop()}}),i)})))()},getCourseInfo:function(t,n){var i=this;return(0,u.default)(r.default.mark((function s(){var u,c;return r.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return u=o.importObject("courseHelper"),s.next=3,u.getCourseInfo(t,n);case 3:c=s.sent,403===c.code?e.$showMsg(c.message,"none"):(i.selectedCourse=c,console.log(i.selectedCourse),i.showPage=!0,i.selectedCourse.clockList&&(i.clockList=i.selectedCourse.clockList),i.isUploadTime=!1,i.isUploadMethod=!1,i.isUploadStaff=!1,void 0!==i.selectedCourse.clockList&&(i.isUploadTime=!0),void 0!==i.selectedCourse.staffList&&(i.isUploadStaff=!0),""!==i.selectedCourse.method&&(i.isUploadMethod=!0),i.isShowPunchResComponent());case 5:case"end":return s.stop()}}),s)})))()},openLocation:function(t,n){"定位打卡"===this.selectedCourse.method&&t&&n&&e.openLocation({latitude:t,longitude:n,success:function(){console.log("success")}})},selectMethodOfClock:function(e){this.methodOfClock=e,"定位打卡"===e?this.getMapLocation():(this.location={},this.upLoadMethod()),this.$refs.popupMethod.close()},getMapLocation:function(){var t=this;e.getSetting({success:function(n){n.authSetting["scope.userLocation"]?e.chooseLocation({success:function(e){t.location.name=e.name,t.location.address=e.address,t.location.latitude=e.latitude,t.location.longitude=e.longitude,t.upLoadMethod()},fail:function(){e.$showMsg("获取定位失败或用户取消","none")}}):void 0===n.authSetting["scope.userLocation"]&&e.authorize({scope:"scope.userLocation",success:function(n){e.chooseLocation({success:function(e){t.location.name=e.name,t.location.address=e.address,t.location.latitude=e.latitude,t.location.longitude=e.longitude,t.upLoadMethod()},fail:function(){e.$showMsg("获取定位失败或用户取消","none")}})}})},fail:function(){e.$showMsg("获取授权信息失败","none")}})},upLoadMethod:function(){var t=this;return(0,u.default)(r.default.mark((function n(){var i,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=o.importObject("courseHelper"),n.next=3,i.addMethod(t.token,t.methodOfClock,t.location,t.selectedCourse._id);case 3:s=n.sent,0!==s.updated&&void 0===s.code?(t.isUploadMethod=!0,e.$showMsg("更新成功","success")):403===s.code&&e.$showMsg("更新失败","none");case 5:case"end":return n.stop()}}),n)})))()},activeChanged:function(e){this.active=e,this.clockList=[],this.getCourseInfo(this.token,this.courseList[e]._id)},changeEditStatus:function(){this.isEdit?this.isUploadMethod&&this.isUploadStaff&&this.isUploadTime?(this.isEdit=!1,this.isShadow=!1,this.getCourseInfo(this.token,this.selectedCourse._id)):e.$showMsg("请设置完全部项","none"):(this.isEdit=!0,this.isShadow=!0)},toggle:function(t,n){var o=this;this.isEdit?(this.mode=n,"time"===n?this.$refs.popupTime.open(t):"method"===n?this.$refs.popupMethod.open(t):"staff"===n&&i.chooseMessageFile({count:1,type:"file",success:function(t){var n=t.tempFiles[0].name.substring(t.tempFiles[0].name.lastIndexOf(".")+1);if("xlsx"!==n&&"xls"!==n)e.$showMsg("选择的文件不是excel文件，请重新选择!","none");else{o.fileName=t.tempFiles[0].name;var i=t.tempFiles[0].path;o.uploadExcel(i,n)}},fail:function(e){console.log(e)}})):"time"===n?this.selectedCourse.clockList&&this.$refs.popupAttendanceTime.open("center"):"method"===n?this.selectedCourse.method&&this.$refs.popupAttendanceMethod.open("center"):this.selectedCourse.staffList&&e.navigateTo({url:"/pages/lookUpStaff/lookUpStaff?staff="+encodeURIComponent(JSON.stringify(this.selectedCourse.staffList))})},uploadExcel:function(t,n){var i=this;o.uploadFile({filePath:t,cloudPath:(new Date).getTime()+"."+n,success:function(e){i.parseFile(e.fileID)},fail:function(){e.$showMsg("文件上传失败","error")}})},parseFile:function(t){var n=this;return(0,u.default)(r.default.mark((function i(){var s,u;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=o.importObject("parseExcel"),i.next=3,s.parseF(t,n.selectedCourse._id,n.token);case 3:u=i.sent,200===u.code?(n.isUploadStaff=!0,e.$showMsg("解析文件成功","success")):e.$showMsg("解析文件失败","none");case 5:case"end":return i.stop()}}),i)})))()},timeClose:function(){var t=this;return(0,u.default)(r.default.mark((function n(){var i,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.chackClockList()){n.next=13;break}if("[]"===JSON.stringify(t.clockList)){n.next=10;break}return i=o.importObject("courseHelper"),n.next=5,i.addClockList(t.token,t.clockList,t.selectedCourse._id);case 5:s=n.sent,200===s.code?(t.isUploadTime=!0,e.$showMsg(s.message,"success")):e.$showMsg(s.message,"error"),t.$refs.popupTime.close(),n.next=11;break;case 10:e.$showMsg("请设置打卡时间","none");case 11:n.next=14;break;case 13:e.$showMsg("日期存在冲突，请重新设置","none");case 14:case"end":return n.stop()}}),n)})))()},timeOk:function(){if(+this.hourOfStart>+this.hourOfEnd||+this.hourOfStart>+this.hourOfEnd&&+this.minuteOfStart>=+this.minuteOfEnd||+this.hourOfStart===+this.hourOfEnd&&+this.minuteOfStart>=+this.minuteOfEnd)e.$showMsg("时间有误，请重新设置","none");else if(""===this.note)e.$showMsg("请选择打卡日期","none");else{var t=this.clockInfoToStr(this.hourOfStart,this.minuteOfStart,this.hourOfEnd,this.minuteOfEnd),n=p(p({},t),{},{date:this.note.substring(2)});this.clockList.push(n),this.note=""}},swipeItemClickHandler:function(e){for(var t=e+1;t<this.clockList.length;t++)this.clockList[t-1]=this.clockList[t];this.clockList.pop()},chackClockList:function(){var e,t=new Set,n=0,o=l(this.clockList);try{for(o.s();!(e=o.n()).done;){var i=e.value,s=i.date;if(s.length>1){var r,u=s.split("、"),c=l(u);try{for(c.s();!(r=c.n()).done;){var a=r.value;if(t.has(a)){n=1;break}t.add(a)}}catch(f){c.e(f)}finally{c.f()}}else{if(t.has(s)){n=1;break}t.add(s)}if(1===n)return!1}}catch(f){o.e(f)}finally{o.f()}return 1!==n},clockInfoToStr:function(e,t,n,o){var i=this.wordToStr(e),s=this.wordToStr(t),r=this.wordToStr(n),u=this.wordToStr(o);return{timeOfStart:i+":"+s,timeOfEnd:r+":"+u}},wordToStr:function(e){return"string"===typeof e?1===e.length&&(e="0"+e):e=e<10?"0"+e:""+e,e},bindChangeOfStart:function(e){var t=e.detail.value;this.hourOfStart=this.hoursOfStart[t[0]],this.minuteOfStart=this.minutesOfStart[t[1]]},bindChangeOfEnd:function(e){var t=e.detail.value;this.hourOfEnd=this.hoursOfEnd[t[0]],this.minuteOfEnd=this.minutesOfEnd[t[1]]},selectDate:function(){e.navigateTo({url:"/pages/selRecurDate/selRecurDate"})},regionBindClick:function(e){if(0!==e.length){var t=e.join("、");this.note=t}else this.note=""},changeDate:function(e){this.noteOfDate=e,this.note=this.noteOfDate}},"regionBindClick",(function(e){if(0!==e.length){var t="每周"+e.join("、");this.note=t}else this.note=""}))};t.default=v}).call(this,n(2)["default"],n(27)["default"],n(1)["default"])},131:function(e,t,n){"use strict";n.r(t);var o=n(132),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a},132:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/teacherPart/teacherPart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/teacherPart/teacherPart-create-component',
    {
        'components/teacherPart/teacherPart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(126))
        })
    },
    [['components/teacherPart/teacherPart-create-component']]
]);
