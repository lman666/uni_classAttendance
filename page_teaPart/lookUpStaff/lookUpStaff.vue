<template>
  <view class="staffList">
    <uni-list>
      <block v-for="(item, i) in staff" :key="i">
        <uni-list-item :title="item.name" :note="item.code" :rightText="item.school" />
      </block>
    </uni-list>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 打卡人员
        staff: []
      }
    },
    onLoad(option) {
      this.staff = JSON.parse(decodeURIComponent(option.staff))
    }
  }
</script>

<style lang="less">

</style>
