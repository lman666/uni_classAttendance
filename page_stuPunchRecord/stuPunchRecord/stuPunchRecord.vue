<template>
  <view class="body">
    <view class="calendar_box">
      <view class='gs_pillar'>
        <view class='gs_post'>
          <view></view>
        </view>
        <view class='gs_post'>
          <view></view>
        </view>
        <view class='gs_post'>
          <view></view>
        </view>
        <view class='gs_post'>
          <view></view>
        </view>
        <view class='gs_post'>
          <view></view>
        </view>
      </view>
      <view class="calendar">
        <uni-calendar class="uni-calendar--hook" :showMonth="false" :endDate="currentDate" @change="change" />
      </view>
    </view>
    <view class="punchResults">
      <view class="noResults" v-if="!punchData">
        <image src="../../static/tab_icons/noResults.png" @load="load" :style="{width:imageWidth, height:imageHeight}"></image>
      </view>
      <view class="hasResults" v-else>
        <block v-for="(item, i) in punchDataOfDay" :key="i">
          <view class="status_box">
            <view class="courseName_box">
              <view class="top">
                <view class="pillar"></view>
                <view class="title">课程名称</view>
              </view>
              <view class="bottom">
                <view class="detail">{{item.courseName}}</view>
              </view>
            </view>
            <view class="punchStatus_box">
              <view class="top">
                <view class="pillar"></view>
                <view class="title">打卡状态</view>
              </view>
              <view class="bottom">
                <view class="detail">{{item.punchStatus}}</view>
              </view>
            </view>
            <view class="punchTime_box" v-if="item.punchTime">
              <view class="top">
                <view class="pillar"></view>
                <view class="title">打卡时间</view>
              </view>
              <view class="bottom">
                <view class="detail">{{item.punchTime}}</view>
              </view>
            </view>
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        courseInfoListOfPunchWeek: [], // 某周几需打卡的课程信息列表
        punchInfoOfDayList: [], // 该生某天的已打卡信息列表
        punchData: false, // 是否有打卡数据
        currentDate: '', // 当天日期
        currentWeek: '',  //当天周几
        punchDataOfDay: [], // 该生某天的打卡数据
        currentpunchDataOfDay: {}, // 当前显示的该生某天的打卡数据
        imageWidth: '',   // 缺省图片宽度
        imageHeight: ''  // 缺省图片高度
      };
    },
    computed: {
      ...mapState('m_stuCourseInfo', ['m_stuCourseInfoList']),
      ...mapState('m_user', ['userData', 'token'])
    },
    created() {
      this.getCurrentDate()
      this.getCurrentWeek()
      this.judgeDay(this.currentDate, this.currentWeek)
    },
    methods: {
      // 得到当天日期
      getCurrentDate() {
        let date = new Date()
        let fullYear = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        this.currentDate = fullYear + '-' + month + '-' + day
      },
      // 得到当天周几
      getCurrentWeek() {
        let date = new Date()
        let weekNum = date.getDay()
        let weekMap = new Map([
          [0, '星期日'],
          [1, '星期一'],
          [2, '星期二'],
          [3, '星期三'],
          [4, '星期四'],
          [5, '星期五'],
          [6, '星期六']
        ])
        this.currentWeek = weekMap.get(weekNum)
      },
      change(e) {
        this.courseInfoListOfPunchWeek = []
        this.punchInfoOfDayList = []
        this.punchDataOfDay = []
        this.punchData = false
        this.judgeDay(e.fulldate, e.lunar.ncWeek)
      },
      // 判断某天是否为打卡日期
      async judgeDay(date, week) {
        this.addCourseIdList(week)
        if (JSON.stringify(this.courseInfoListOfPunchWeek) !== '[]') {
          this.punchData = true
          date = date.split('-')[0] + '.' + +(date.split('-')[1]) + '.' + +((date.split('-')[2]))
          const clockHelper = uniCloud.importObject('clockHelper')
          let stuInfo = {
            code: this.userData.code,
            name: this.userData.name,
            school: this.userData.school
          }
          this.punchInfoOfDayList = await clockHelper.getPunchInfoOfDay(this.token, date, this
            .courseInfoListOfPunchWeek, stuInfo)
          this.getPunchDataOfDay()
        } else {
          this.punchData = false
        }
      },
      // 添加某星期几需打卡的课程信息
      addCourseIdList(week) {
        for (let item1 of this.m_stuCourseInfoList) {
          for (let item2 of item1.clockList) {
            if (item2.date === week.charAt(2)) {
              let courseInfo = {
                course_id: item1._id,
                course_name: item1.courseName
              }
              this.courseInfoListOfPunchWeek.push(courseInfo)
              break
            }
          }
        }
      },
      // 整合某天的打卡数据
      getPunchDataOfDay() {
        if (JSON.stringify(this.punchInfoOfDayList) !== '[]') {
          for (let item1 of this.punchInfoOfDayList) {
            let data = {
              punchStatus: item1.isLate ? '迟到' : item1.time ? '正常' : '补卡成功',
              punchTime: item1.time
            }
            for (let item2 of this.courseInfoListOfPunchWeek) {
              if (item2.course_id === item1.course_id) {
                data.courseName = item2.course_name
                break
              }
            }
            this.punchDataOfDay.push(data)
          }
        } else {
          for (let item of this.courseInfoListOfPunchWeek) {
            let data = {
              courseName: item.course_name,
              punchStatus: '未打卡'
            }
            this.punchDataOfDay.push(data)
          }
        }
        console.log(this.punchDataOfDay)
      },
      // 缺省图片加载完毕
      load(e) {
        this.imageWidth = e.detail.width + 'px'
        this.imageHeight = e.detail.height + 'px'
      }
    }
  }
</script>

<style lang="less">
  page {
    padding-bottom: 30rpx;
  }
</style>
<style lang="less" scoped>
  .calendar_box {
    background-color: #fff;
    width: 95%;
    margin: 30rpx auto 0;
    position: relative;
    border-radius: 15rpx;
    box-sizing: border-box;

    .gs_pillar {
      overflow: hidden;
      position: absolute;
      top: -16rpx;
      width: 100%;

      .gs_post {
        float: left;
        width: 20%;
        text-align: center;

        view {
          display: inline-block;
          width: 18rpx;
          height: 42rpx;
          background-color: #ffd2d3;
          border-radius: 20rpx;
        }
      }
    }

    .calendar {
      padding: 30rpx 10rpx 10rpx 10rpx;
      width: 100%;
      box-sizing: border-box;

      /deep/ .uni-calendar__header {
        height: 85rpx;
      }

      /deep/ .uni-calendar__box {
        .uni-calendar__weeks {
          .uni-calendar__weeks-day {
            height: 65rpx;
          }

          .uni-calendar__weeks-item {
            .uni-calendar-item--hook {
              .uni-calendar-item--checked {
                background-color: #ffd2d3;
              }

              .uni-calendar-item--isDay {
                background-color: #ffd2d3;
              }

              .uni-calendar-item__weeks-box-item {
                height: 70rpx;
              }
            }
          }
        }
      }
    }
  }
  
  .noResults {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    border-radius: 15rpx;
    padding: 40rpx 30rpx 30rpx 30rpx;
    margin: 30rpx auto 0;
    box-sizing: border-box;
  }

  .status_box {
    width: 95%;
    border-radius: 15rpx;
    padding: 40rpx 30rpx 30rpx 30rpx;
    margin: 30rpx auto 0;
    background-color: #fff;
    box-sizing: border-box;
    color: rgb(99, 99, 99);

    .punchStatus_box,
    .punchTime_box {
      margin-top: 50rpx;
    }

    .detail {
      font-size: 30rpx;
    }

    .top {
      display: flex;

      .pillar {
        display: inline-block;
        width: 18rpx;
        height: 42rpx;
        background-color: #ffd2d3;
        border-radius: 20rpx;
        margin-right: 20rpx;
      }
    }

    .bottom {
      margin-top: 15rpx;
      margin-left: 30rpx;
    }
  }
</style>
