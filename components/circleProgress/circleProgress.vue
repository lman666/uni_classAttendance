<template>
  <view class="progress_box">
    <canvas class="progress_bg" canvas-id="cpbg" :style="{width:progress_width+'px',height:progress_height+'px'}"
      v-show="isShow"></canvas>
    <image v-if="!isShow && cpbgImg" :src="cpbgImg"
      :style="{width:progress_width+'px',height:progress_height+'px'}"></image>
    <canvas class="progress_bar" canvas-id="cpbar" :style="{width:progress_width+'px',height:progress_height+'px'}"
      v-show="isShow"></canvas>
    <image v-if="!isShow && cpbarImg" :src="cpbarImg"
      :style="{width:progress_width+'px',height:progress_height+'px'}" class="cpbarImgStyle"></image>
    <view class="progress">
      <view class="data">{{alreadyPunchCount + ' / ' + totalStaffCount}}</view>
      <view class="explain">打卡人数 / 应到人数</view>
    </view>
  </view>
</template>
<script>
  export default {
    name: "circleProgress",
    props: {
      isShowCanvas: {
        type: Boolean,
        default: true,
        required: true
      },
      alreadyPunchCount: {
        type: Number,
        default: 0,
        required: true
      },
      totalStaffCount: {
        type: Number,
        default: 0,
        required: true
      },
      progress_time: {
        type: Number,
        default: 1500
      },
      progress_width: {
        type: Number,
        default: 200
      },
      progress_height: {
        type: Number,
        default: 160
      },
      border_width: {
        type: Number,
        default: 15
      },
      bg_color: {
        type: String,
        default: '#EDEDED'
      },
      start_color: {
        type: String,
        default: '#ffa3a8'
      },
      end_color: {
        type: String,
        default: '#ffd7d9'
      },
    },
    watch: {
      alreadyPunchCount() {
        this.calculate()
        this.drawCircle(this.value)
      },
      totalStaffCount() {
        this.calculate()
        this.drawCircle(this.value)
      },
      isShowCanvas() {
        if (this.isShowCanvas) {
          let timer = setTimeout(() => {
            this.isShow = this.isShowCanvas
            clearTimeout(timer)
          }, 200)
        } else {
          this.isShow = this.isShowCanvas
        }
      }
    },
    data() {
      return {
        percent: 0, // 保存进度值的变化前后值，用于比较用
        value: 0, // 计算结果
        cpbgImg: '', // canvas背景图片
        cpbarImg: '' ,// canvas画圆部分图片
        isShow: true, // 是否显示
      }
    },
    created() {
      this.calculate()
    },
    mounted() {
      this.drawProgressbg()
      this.drawCircle(this.value)
    },
    methods: {
      // 计算结果
      calculate() {
        if (this.totalStaffCount !== 0) {
          this.value = Math.floor(this.alreadyPunchCount / this.totalStaffCount * 100)
        } else {
          this.value = 0
        }
      },
      // 将画布生成图片
      canvasToTempFilePath(x, y, width, height, canvasId, destWidth, destHeight, obj, target) {
        setTimeout(() => {
          uni.canvasToTempFilePath({
            x,
            y,
            width,
            height,
            canvasId,
            destWidth,
            destHeight,
            success: (res) => {
              this[target] = res.tempFilePath
            }
          }, obj)
        }, 500)
      },
      // 背景
      drawProgressbg: function() {
        let that = this
        // 自定义组件实例 this ，表示在这个自定义组件下查找拥有 canvas-id 的 <canvas/>
        let ctx = uni.createCanvasContext('cpbg', this)
        ctx.setLineWidth(this.border_width)
        ctx.setStrokeStyle(this.bg_color)
        ctx.setLineCap('round')
        ctx.beginPath()
        ctx.arc(100, 100, 80, 0.99 * Math.PI, 0.01 * Math.PI, false)
        ctx.stroke()
        ctx.draw(false, that.canvasToTempFilePath(0, 0, 200, 160, 'cpbg', 200, 160, that, 'cpbgImg'))
      },
      // 画圆（递归调用）
      drawCircle: function(step) {
        let that = this
        // if (step === 0) return;
        let time = Math.floor(this.progress_time / 100)
        let ctx = uni.createCanvasContext('cpbar', this)
        let gradient = ctx.createLinearGradient(28, 55, 192, 55)
        gradient.addColorStop('0', this.start_color)
        gradient.addColorStop('1.0', this.end_color)
        ctx.setLineWidth(this.border_width)
        ctx.setStrokeStyle(gradient)
        ctx.setLineCap('round')
        ctx.beginPath();
        if (step !== 0) {
          step = 0.01 * step + 0.99
          if (step === 1) {
            step = 0.99
          }
          if (step >= 2) {
            step = step % 2
          }
          if (step === 1.99) {
            step = 0.01
          }
          ctx.arc(100, 100, 80, 0.99 * Math.PI, step * Math.PI, false)
        } else {
          ctx.restore()
        }
        ctx.stroke()
        ctx.draw(false, that.canvasToTempFilePath(0, 0, 200, 160, 'cpbar', 200, 160, that, 'cpbarImg'))
        if (this.value > this.percent) {
          this.percent++
          setTimeout(() => {
              this.drawCircle(this.percent)
            },
            time)
        } else if (this.value < this.percent) {
          this.percent--
          setTimeout(() => {
              this.drawCircle(this.percent)
            },
            time)
        }
      }
    }
  };
</script>

<style lang="less">
  @import url('circleProgress.less');
</style>
