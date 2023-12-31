<template>
  <view class="student">
    <view class="hasStuData" v-if="showPage && JSON.stringify(selectedCourse) !== '{}'">
      <view class="page-top">
        <image src="../../static/tab_icons/openDrawer.png" @click="showDrawer('showLeft')"></image>
        <view class="title" v-if="JSON.stringify(selectedCourse) !== '{}'">{{selectedCourse.courseName}}</view>
      </view>
      <view class="stuCourseInfo">
        <uni-collapse accordion ref="collapse">
          <uni-collapse-item title="打卡时间">
            <view class="clockList">
              <uni-list>
                <block v-for="(item, i) in selectedCourse.clockList" :key="i">
                  <uni-list-item :title="'每周' + item.date" :rightText="item.timeOfStart + '—' + item.timeOfEnd" />
                </block>
              </uni-list>
            </view>
          </uni-collapse-item>
          <uni-collapse-item title="打卡方式">
            <view class="clockMethod">
              <uni-list>
                <uni-list-item clickable
                  @click="openLocation(selectedCourse.location.latitude, selectedCourse.location.longitude)">
                  <template v-slot:header>
                    <view class="method">
                      <text>{{selectedCourse.method}}</text>
                    </view>
                  </template>
                  <template v-slot:footer v-if="selectedCourse.method === '定位打卡'">
                    <view class="location">
                      <text v-if="selectedCourse.method === '定位打卡'">{{selectedCourse.location.name}}</text>
                    </view>
                  </template>
                </uni-list-item>
              </uni-list>
            </view>
          </uni-collapse-item>
          <uni-collapse-item title="任课老师">
            <view class="teacher">
              <uni-list>
                <uni-list-item clickable
                  @click="chatToTea(teaInfoOfSelCourse.openid)">
                  <template v-slot:header>
                    <view class="teaName">
                      <text>{{teaInfoOfSelCourse.name}}</text>
                    </view>
                  </template>
                  <template v-slot:footer>
                    <view class="teaInfo">
                      <text>{{teaInfoOfSelCourse.code}}</text>
                      <text>{{teaInfoOfSelCourse.school}}</text>
                    </view>
                  </template>
                </uni-list-item>
              </uni-list>
            </view>
          </uni-collapse-item>
        </uni-collapse>
      </view>
      <view class="work">
        <view class='gs_incircle' :style="withinTheClockingTime && !isPunch ? '' : 'background-color:#e7ebed;'">
          <view class='gs_excircle'>
            <view class='gs_innercircle' :style="withinTheClockingTime && !isPunch ? '' : 'background-color:#ddd;'"
              @click="punchTheClock">
              <text class="punchTheClock">{{isPunch ? '已签到' : isLate ? '迟到' : '签到'}}</text>
              <text class="currentTime">{{currentTime}}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="drawer">
        <uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
          <view class="close">
            <image src="../../static/tab_icons/closeDrawer.png" @click="closeDrawer('showLeft')"></image>
          </view>
          <view>
            <uni-list :border="true">
              <block v-for="(item, i) in stuCourseInfoList" :key="i">
                <uni-list-item :title="item.courseName" clickable @click="activeChanged(i)"
                  :class="i === active? 'active' : ''"></uni-list-item>
              </block>
            </uni-list>
          </view>
        </uni-drawer>
      </view>
    </view>
    <view class="noStuData" v-if="showPage && JSON.stringify(selectedCourse) === '{}'" :style="{width:viewWidth, height:viewHeight}">
      <image src="@/static/tab_icons/noData.png" @load="autoView">
      </image>
    </view>
  </view>
</template>

<script>
  import {
    pathToBase64
  } from 'image-tools' 
  import {
    mapMutations,
    mapState
  } from 'vuex'
  
  export default {
    name: "studentPart",
    props: {
      userData: {
        type: Object,
        default: {}
      },
      token: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        active: 0,
        selectedCourse: {}, // 选中的课程
        stuCourseInfoList: [], // 学生端课程详细信息列表
        currentTime: '', // 目前的时间
        currentDate: '', // 目前的日期
        withinTheClockingTime: false, // 是否在打卡时间内
        isPunch: false, // 是否已打卡
        interval: {}, // 定时器对象
        stuPhoto: '', // 学生个人图片
        viewWidth: '', // 缺省部分宽度
        viewHeight: '', // 缺省部分高度
        showPage: false,
        isLate: false,   // 是否迟到
        teaInfoOfSelCourse: {}    // 所选择的课程的教师信息
      }
    },
    options: {
      styleIsolation: 'shared'
    },
    computed: {
      ...mapState('m_stuCourseInfo', ['m_stuCourseInfoList'])
    },
    created() {
      this.getCurrentDate()
      setInterval(this.getNowTime, 1000);
      this.getCourseIdList(this.token, this.userData.code, this.userData.school)
    },
    methods: {
      ...mapMutations('m_stuCourseInfo', ['updateM_stuCourseInfoList']),
      // 与任课老师聊天
      chatToTea(openid) {
        uni.$TUIKit
        	.getUserProfile({
        		userIDList: [openid]
        	})
        	.then(imRes => {
        		if (imRes.data.length > 0) {
        			uni.navigateTo({
        			  url: `/page_chat/TUI-Chat/chat?conversationID=C2C${imRes.data[0].userID}`
        			})
        		} else {
              uni.$showMsg('用户不存在', 'none')
        		}
        	})
      },
      // 打开窗口
      showDrawer(e) {
        this.$refs[e].open()
      },
      // 关闭窗口
      closeDrawer(e) {
        this.$refs[e].close()
      },
      // 抽屉状态发生变化触发
      change(e, type) {
        this[type] = e
      },
      // 签到
      async punchTheClock() {
        if (this.withinTheClockingTime) {
          if (!this.isPunch) {
            if (this.selectedCourse.method === '定位打卡') {
              this.positioningPunch()
            } else if (this.selectedCourse.method === '普通打卡') {
              this.clockSuccessfull()
            } else {
              this.takePhoto()
            }
          }
        } else {
          return
        }
      },
      // 拍照
      takePhoto() {
        uni.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success: (res) => {
            this.imageToBase64(res.tempFilePaths[0])
          }
        })
      },
      // 设置缺省部分宽高
      autoView(e) {
        uni.getSystemInfo({
          complete: (res) => {
            this.viewWidth = res.windowWidth + 'px'
            this.viewHeight = res.windowHeight + 'px'
          }
        })
      },
      // 本地图片转base64
      imageToBase64(path) {
        pathToBase64(path)
          .then(base64 => {
            this.faseDetect(base64)
          })
          .catch(error => {
            console.error(error)
          })
      },
      // 应用百度人脸对比api
      async faseDetect(base64) {
        const clockHelper = uniCloud.importObject('clockHelper')
        let res = await clockHelper.faseDetect(this.token, base64)
        if (res.code === 201) {
          this.clockSuccessfull()
        } else {
          uni.$showMsg(res.message, 'error')
        }
      },
      // 打卡成功并上传到数据库
      async clockSuccessfull() {
        const clockHelper = uniCloud.importObject('clockHelper')
        let obj = {
          course_id: this.selectedCourse._id,
          code: this.userData.code,
          name: this.userData.name,
          school: this.userData.school,
          date: this.currentDate,
          time: this.currentTime,
          isLate: this.isLate
        }
        let res = await clockHelper.punchTheClock(this.token, obj)
        if (res.code === 200) {
          uni.$showMsg(res.message, 'success')
          this.isPunch = true
        } else {
          uni.$showMsg(res.message, 'none')
        }
      },
      // 定位打卡
      positioningPunch() {
        uni.getLocation({
          type: 'wgs84',
          success: (res) => {
            console.log(res.longitude, res.latitude)
            console.log(this.selectedCourse.location.longitude, this.selectedCourse.location.latitude)
            let difOfLongitude = Math.abs(res.longitude - this.selectedCourse.location.longitude)
            let difOfLatitude = Math.abs(res.latitude - this.selectedCourse.location.latitude)
            if (difOfLongitude <= 0.5 && difOfLatitude <= 0.5) {
              this.clockSuccessfull()
            } else {
              uni.$showMsg("当前位置不符合打卡要求", "none")
            }
          }
        })
      },
      // 获取该课程的教师信息
      async getTeaInfo(openid) {
        const courseHelper = uniCloud.importObject('courseHelper')
        let teaInfoRes = await courseHelper.getTeaInfo(this.token, openid)
        this.teaInfoOfSelCourse = teaInfoRes.data[0]
      },
      // 选择课程
      activeChanged(i) {
        this.active = i
        clearInterval(this.interval)
        this.selectedCourse = this.stuCourseInfoList[i]
        this.getTeaInfo(this.selectedCourse.openid)
        this.$nextTick(() => {
          this.$refs.collapse.resize()
        })
        this.withinTheClockingTime = false
        this.isPunch = false
        this.isLate = false
        this.checkPunchOrNot()
      },
      // 根据位置信息打开地图
      openLocation(latitude, longitude) {
        if (this.selectedCourse.method === '定位打卡' && latitude && longitude) {
          uni.openLocation({
            latitude: latitude,
            longitude: longitude,
            fail: () => {
              uni.$showMsg("地图调用失败", 'error')
            }
          })
        }
      },
      // 得到当前日期
      getCurrentDate() {
        let date = new Date()
        let fullYear = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        this.currentDate = fullYear + '.' + month + '.' + day
      },
      // 显示当前时分秒
      getNowTime() {
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        hour = hour <= 9 ? '0' + hour : hour
        minute = minute <= 9 ? '0' + minute : minute
        second = second <= 9 ? '0' + second : second
        this.currentTime = hour + ':' + minute + ':' + second
      },
      // 根据课程id加载课程信息（学生端）
      async stuGetCourseInfo(token, course_id) {
        const courseHelper = uniCloud.importObject('courseHelper')
        let res = await courseHelper.getCourseInfo(token, course_id)
        if (res.code === 403) {
          uni.$showMsg(res.message, 'none')
          return
        } else {
          return res
        }
      },
      // 检验是否到签到日期
      checkIsWithinTheDate() {
        let clockList = this.selectedCourse.clockList
        let date = new Date()
        let currentWeek = date.getDay()
        let weekMap = new Map([
          ['日', 0],
          ['一', 1],
          ['二', 2],
          ['三', 3],
          ['四', 4],
          ['五', 5],
          ['六', 6]
        ])
        for (let item of clockList) {
          if (weekMap.get(item.date) === currentWeek) {
            return {
              isPunchTheClock: true,
              timeOfStart: item.timeOfStart,
              timeOfEnd: item.timeOfEnd
            }
          }
        }
        return {
          isPunchTheClock: false
        }
      },
      // 时间字符串转化为时间戳
      timeStrToStamp(timeStr) {
        let hour = +timeStr.split(':')[0]
        let minute = +timeStr.split(':')[1]
        let timeStamp = hour * 3600 + minute * 60
        return timeStamp
      },
      // 检验是否到签到时间
      checkIsPunchTheClock(clockObj) {
        let date = new Date()
        let timeStampOfStart = this.timeStrToStamp(clockObj.timeOfStart)
        let timeStampOfEnd = this.timeStrToStamp(clockObj.timeOfEnd)
        let timeStampOfCurrent = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
        if (((timeStampOfCurrent >= timeStampOfStart - 900 && timeStampOfCurrent <= timeStampOfStart) || timeStampOfStart <= timeStampOfCurrent) && timeStampOfEnd >= timeStampOfCurrent) {
          this.withinTheClockingTime = true
          if (timeStampOfCurrent >= timeStampOfStart - 900 && timeStampOfCurrent <= timeStampOfStart) {
            this.isLate = false
          } else {
            this.isLate = true
          }
        } else {
          this.withinTheClockingTime = false
        }
      },
      // 检验是否要打卡
      async checkPunchOrNot() {
        let obj = this.checkIsWithinTheDate()
        if (obj.isPunchTheClock) {
          const clockHelper = uniCloud.importObject('clockHelper')
          let res = await clockHelper.checkAlreadyPunch(this.token, this.currentDate, this.selectedCourse._id, this
            .userData.code)
          if (!res) {
            // 未签到
            this.interval = setInterval(this.checkIsPunchTheClock, 1000, obj)
          } else {
            // 已签到
            this.isPunch = true
          }
        }
      },
      // 获取课程id列表
      async getCourseIdList(token, stuCode, stuSchool) {
        const courseHelper = uniCloud.importObject('courseHelper')
        let res = await courseHelper.getCourInfoAccordingToStuInfo(token, stuCode, stuSchool)
        if (res.code === 402) {
          uni.$showMsg(res.message, 'error')
        } else {
          for (let item of res) {
            let result = await this.stuGetCourseInfo(token, item)
            this.stuCourseInfoList.push(result)
          }
          if (this.stuCourseInfoList.length) {
            this.updateM_stuCourseInfoList(this.stuCourseInfoList)
            this.selectedCourse = this.stuCourseInfoList[0]
            this.getTeaInfo(this.selectedCourse.openid)
            this.checkPunchOrNot()
            this.showPage = true
          } else {
            this.showPage = true
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('studentPart.less');
</style>
