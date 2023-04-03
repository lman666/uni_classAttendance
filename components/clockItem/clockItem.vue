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
  @import url('clockItem.less');
</style>
