(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/circleProgress/circleProgress"],{272:function(t,e,r){"use strict";r.r(e);var n=r(273),a=r(275);for(var i in a)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r(277);var o,u=r(53),c=Object(u["default"])(a["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],o);c.options.__file="components/circleProgress/circleProgress.vue",e["default"]=c.exports},273:function(t,e,r){"use strict";r.r(e);var n=r(274);r.d(e,"render",(function(){return n["render"]})),r.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),r.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),r.d(e,"components",(function(){return n["components"]}))},274:function(t,e,r){"use strict";var n;r.r(e),r.d(e,"render",(function(){return a})),r.d(e,"staticRenderFns",(function(){return o})),r.d(e,"recyclableRender",(function(){return i})),r.d(e,"components",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=!1,o=[];a._withStripped=!0},275:function(t,e,r){"use strict";r.r(e);var n=r(276),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},276:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"circleProgress",props:{alreadyPunchCount:{type:Number,default:0,required:!0},totalStaffCount:{type:Number,default:0,required:!0},progress_time:{type:Number,default:1500},progress_width:{type:Number,default:200},progress_height:{type:Number,default:160},border_width:{type:Number,default:15},bg_color:{type:String,default:"#EDEDED"},start_color:{type:String,default:"#ffa3a8"},end_color:{type:String,default:"#ffd7d9"}},watch:{alreadyPunchCount:function(){this.calculate(),this.drawCircle(this.value)},totalStaffCount:function(){this.calculate(),this.drawCircle(this.value)}},data:function(){return{percent:0,value:0}},created:function(){this.calculate()},mounted:function(){this.drawProgressbg(),this.drawCircle(this.value)},methods:{calculate:function(){0!==this.totalStaffCount?this.value=Math.floor(this.alreadyPunchCount/this.totalStaffCount*100):this.value=0},drawProgressbg:function(){var e=t.createCanvasContext("cpbg",this);e.setLineWidth(this.border_width),e.setStrokeStyle(this.bg_color),e.setLineCap("round"),e.beginPath(),e.arc(100,100,80,.99*Math.PI,.01*Math.PI,!1),e.stroke(),e.draw()},drawCircle:function(e){var r=this,n=Math.floor(this.progress_time/100),a=t.createCanvasContext("cpbar",this),i=a.createLinearGradient(28,55,192,55);i.addColorStop("0",this.start_color),i.addColorStop("1.0",this.end_color),a.setLineWidth(this.border_width),a.setStrokeStyle(i),a.setLineCap("round"),a.beginPath(),0!==e?(e=.01*e+.99,1===e&&(e=.99),e>=2&&(e%=2),1.99===e&&(e=.01),a.arc(100,100,80,.99*Math.PI,e*Math.PI,!1)):a.restore(),a.stroke(),a.draw(),this.value>this.percent?(this.percent++,setTimeout((function(){r.drawCircle(r.percent)}),n)):this.value<this.percent&&(this.percent--,setTimeout((function(){r.drawCircle(r.percent)}),n))}}};e.default=r}).call(this,r(2)["default"])},277:function(t,e,r){"use strict";r.r(e);var n=r(278),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},278:function(t,e,r){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/circleProgress/circleProgress.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/circleProgress/circleProgress-create-component',
    {
        'components/circleProgress/circleProgress-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(272))
        })
    },
    [['components/circleProgress/circleProgress-create-component']]
]);
