<template>
  <view class="select">
    <view class="uni-list">
      <checkbox-group @change="checkboxChange">
        <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
          <view>{{item.name}}</view>
          <view>
            <checkbox :value="item.value" :checked="item.checked" color="#ff9ba3" style="transform:scale(0.8)" />
          </view>
        </label>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            value: '日',
            name: '每周日'
          },
          {
            value: '一',
            name: '每周一'
          },
          {
            value: '二',
            name: '每周二'
          },
          {
            value: '三',
            name: '每周三'
          },
          {
            value: '四',
            name: '每周四'
          },
          {
            value: '五',
            name: '每周五'
          },
          {
            value: '六',
            name: '每周六'
          }
        ],
        res: []
      }
    },
    methods: {
      // 选择日期
      checkboxChange(e) {
        this.res = e.detail.value
      },
      // 点击返回键调用
      bindClick(data) {
        let pages = getCurrentPages()   // 获取当前页面栈的实例
      	let prevPage = pages[pages.length - 2]   //上一页页面实例
        prevPage.$vm.$children[0].regionBindClick(data)   // 调用上一页方法并传参
        uni.navigateBack()   // 返回上级页面
      }
    },
    onUnload() {
      this.bindClick(this.res)
    }
  }
</script>

<style lang="less">
  page {
    background-color: #fff;
  }

  .select {
    width: 100%;
    box-sizing: border-box;
    padding: 0 30rpx;

    .uni-list {

      .uni-list-cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100rpx;
        
        &::after {
          height: 0;
        }
      }

      &::after {
        height: 0;
      }
    }
  }
</style>
