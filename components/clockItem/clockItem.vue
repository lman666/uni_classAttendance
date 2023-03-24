<template>
  <view class="clockItem">
    <view class="time">{{item.timeOfStart + ' - ' + item.timeOfEnd}}</view>
    <view class="frequency">{{'每周' + item.date}}</view>
  </view>
</template>
<script>
  export default {
    name:"clockItem",
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style lang="less">
  .clockItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
    padding: 0 20rpx;
    
    .time {
      font-size: 28rpx;
    }
    
    .frequency {
      font-size: 24rpx;
      color: #8f8f8f;
    }
  }
</style>
