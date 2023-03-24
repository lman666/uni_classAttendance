<template>
  <view class="teacher">
    <view class="page-top">
      <image src="../../static/tab_icons/openDrawer.png" @click="showDrawer('showLeft')"></image>
      <view class="title" v-if="JSON.stringify(selectedCourse) !== '{}'">{{selectedCourse.courseName}}</view>
      <image src="../../static/tab_icons/add.png" @click="addCourse"></image>
    </view>
    <view class="hasTeaData" v-if="showPage && JSON.stringify(selectedCourse) !== '{}'">
      <view class="dataBody">
        <view class="page-bottom" v-if="JSON.stringify(selectedCourse) !== '{}'">
          <uni-card title="基础卡片" extra="额外信息" :is-shadow="isShadow">
            <template v-slot:title>
              <view class="card-top">
                <view class="left">
                  <image src="../../static/tab_icons/class.png" class="classImage"></image>
                  <text>课程信息</text>
                </view>
                <view class="right">
                  <image v-if="!isEdit" src="../../static/tab_icons/edit.png" class="extraImage"
                    @click="changeEditStatus"></image>
                  <image v-else src="../../static/tab_icons/complete.png" class="extraImage" @click="changeEditStatus">
                  </image>
                </view>
              </view>
            </template>
            <view class="card-body">
              <uni-list>
                <uni-list-item title="打卡时间" showArrow :rightText="!isUploadTime ? '未设置' : '已设置'" clickable
                  @click="toggle('bottom', 'time')" />
                <uni-list-item title="打卡方式" showArrow :rightText="!isUploadMethod ? '未设置' : '已设置'" clickable
                  @click="toggle('bottom', 'method')" />
                <uni-list-item title="打卡人员" showArrow :rightText="!isUploadStaff ? '未设置' : '已设置'" clickable
                  @click="toggle('bottom', 'staff')" />
              </uni-list>
            </view>
          </uni-card>
        </view>
      </view>
      <view class="readPunch" v-if="showPunResCom">
        <view class="pickBody">
          <uni-datetime-picker type="date" :clear-icon="false" v-model="selDate" :end="currentDate"
            @change="confirmDate" />
        </view>
        <view class="circleProgress" @click="lookUpPunchRes">
          <circleProgress :alreadyPunchCount="alreadyPunchCount" :totalStaffCount="totalStaffCount"></circleProgress>
        </view>
      </view>
      <view class="editTime">
        <!-- 编辑打卡时间的弹窗 -->
        <uni-popup ref="popupTime" background-color="#fff" @change="change">
          <view class="popupTimeStyle">
            <view class="top">
              <image src="../../static/tab_icons/close.png" @click="timeClose"></image>
              <text>设置时间</text>
              <image src="../../static/tab_icons/check.png" @click="timeOk"></image>
            </view>
            <view class="selectTime">
              <view class="left">
                <picker-view :indicator-style="indicatorStyle" :value="valueOfStart" @change="bindChangeOfStart"
                  class="picker-view">
                  <picker-view-column>
                    <view class="item" v-for="(item,index) in hoursOfStart" :key="index">{{item}}</view>
                  </picker-view-column>
                  <picker-view-column>
                    <view class="item" v-for="(item,index) in minutesOfStart" :key="index">{{item}}</view>
                  </picker-view-column>
                </picker-view>
              </view>
              <view class="middle"></view>
              <view class="right">
                <picker-view :indicator-style="indicatorStyle" :value="valueOfEnd" @change="bindChangeOfEnd"
                  class="picker-view">
                  <picker-view-column>
                    <view class="item" v-for="(item,index) in hoursOfEnd" :key="index">{{item}}</view>
                  </picker-view-column>
                  <picker-view-column>
                    <view class="item" v-for="(item,index) in minutesOfEnd" :key="index">{{item}}</view>
                  </picker-view-column>
                </picker-view>
              </view>
            </view>
            <view class="selectDate">
              <uni-list :border="false">
                <uni-list-item :border="false" title="打卡日期" :note="note === '' ? '请选择' : note" clickable showArrow
                  @click="selectDate"></uni-list-item>
              </uni-list>
            </view>
            <view class="clockList">
              <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{height: 400 + 'rpx'}">
                <uni-swipe-action>
                  <block v-for="(item, i) in clockList" :key="i">
                    <uni-swipe-action-item :right-options="options" @click="swipeItemClickHandler(i)" @change="change">
                      <clockItem :item="item"></clockItem>
                    </uni-swipe-action-item>
                  </block>
                </uni-swipe-action>
              </scroll-view>
            </view>
          </view>
        </uni-popup>
      </view>
      <view class="selectMethod">
        <uni-popup ref="popupMethod" background-color="#fff" @change="change">
          <view class="clockType">
            <button plain="true" @click="selectMethodOfClock('普通打卡')">普通打卡</button>
            <button plain="true" @click="selectMethodOfClock('定位打卡')">定位打卡</button>
            <button plain="true" @click="selectMethodOfClock('人脸识别')">人脸识别</button>
          </view>
        </uni-popup>
      </view>
      <view class="readAttendanceTime">
        <uni-popup ref="popupAttendanceTime" background-color="#fff" @change="change">
          <view class="body">
            <uni-list>
              <block v-for="(item, i) in selectedCourse.clockList" :key="i">
                <uni-list-item :title="'每周' + item.date" :rightText="item.timeOfStart + '—' + item.timeOfEnd" />
              </block>
            </uni-list>
          </view>
        </uni-popup>
      </view>
      <view class="readAttendanceMethod">
        <uni-popup ref="popupAttendanceMethod" background-color="#fff" @change="change">
          <view class="body">
            <uni-list>
              <uni-list-item title="打卡时间" :rightText="selectedCourse.method" />
              <uni-list-item clickable
                @click="openLocation(selectedCourse.location.latitude, selectedCourse.location.longitude)">
                <template v-slot:header>
                  <view class="slot-methodNote">
                    <text>备注</text>
                  </view>
                </template>
                <template v-slot:footer>
                  <view class="slot-methodNoteInfo">
                    <text v-if="selectedCourse.method === '定位打卡'">{{selectedCourse.location.name}}</text>
                    <text v-else>无</text>
                  </view>
                </template>
              </uni-list-item>
            </uni-list>
          </view>
        </uni-popup>
      </view>
    </view>
    <view>
      <!-- 输入框 -->
      <uni-popup ref="inputDialog" type="dialog">
        <uni-popup-dialog ref="inputClose" mode="input" title="添加新课程" placeholder="请输入内容" @confirm="dialogInputConfirm">
        </uni-popup-dialog>
      </uni-popup>
    </view>
    <view class="drawer">
      <uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
        <view class="close">
          <image src="../../static/tab_icons/closeDrawer.png" @click="closeDrawer('showLeft')"></image>
        </view>
        <view>
          <uni-list :border="true">
            <block v-for="(item, i) in courseList" :key="i">
              <uni-list-item :title="item.courseName" clickable @click="activeChanged(i)"
                :class="i === active? 'active' : ''"></uni-list-item>
            </block>
          </uni-list>
        </view>
      </uni-drawer>
    </view>
    <view class="noTeaData" v-if="showPage && JSON.stringify(courseList) === '[]'" :style="{width:viewWidth, height:viewHeight}">
      <image src="../../static/tab_icons/noData.png" @load="autoView" >
      </image>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import clockItem from '@/components/clockItem/clockItem.vue'
  import circleProgress from '@/components/circleProgress/circleProgress.vue'

  export default {
    components: {
      clockItem,
      circleProgress
    },
    data() {
      const date = new Date()
      const hoursOfStart = []
      const hoursOfEnd = []
      const hourOfStart = date.getHours()
      const hourOfEnd = date.getHours()
      const minutesOfStart = []
      const minutesOfEnd = []
      const minuteOfStart = date.getMinutes()
      const minuteOfEnd = date.getMinutes()
      const start = '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      for (let i = 0; i <= 23; i++) {
        if (i < 10) {
          hoursOfStart.push('0' + i)
          hoursOfEnd.push('0' + i)
        } else {
          hoursOfStart.push('' + i)
          hoursOfEnd.push('' + i)
        }
      }
      for (let i = 0; i <= 59; i++) {
        if (i < 10) {
          minutesOfStart.push('0' + i)
          minutesOfEnd.push('0' + i)
        } else {
          minutesOfStart.push('' + i)
          minutesOfEnd.push('' + i)
        }
      }
      return {
        title: 'picker-view',
        hoursOfStart,
        hoursOfEnd,
        hourOfStart,
        hourOfEnd,
        minutesOfStart,
        minutesOfEnd,
        minuteOfStart,
        minuteOfEnd,
        valueOfStart: [hourOfStart, minuteOfStart],
        valueOfEnd: [hourOfEnd, minuteOfEnd],
        indicatorStyle: `height: 40px;`,

        showRight: false,
        showLeft: false,
        courseList: [], // 课程列表
        selectedCourse: {}, // 选中的课程
        active: 0,
        isEdit: false, // 编辑状态
        isShadow: false,
        mode: '', // 底部弹窗模式
        note: '', // 打卡日期
        start, // 开始选择的日期
        scrollTop: 0,
        clockList: [], // 打卡时间列表
        methodOfClock: '', // 打卡方式
        staff: [], // 打卡人员
        fileName: '', // 文件名称
        location: {}, // 地理位置对象
        showPage: false, // 是否显示信息
        isUploadMethod: false, // 是否上传打卡方式
        isUploadTime: false, // 是否上传打卡时间
        isUploadStaff: false, // 是否上传打卡人员
        currentDate: '', // 当天日期
        selDate: '', // 选中的日期
        showPunResCom: false, // 是否显示打卡结果组件
        punchResInfo: {},   // 打卡结果
        alreadyPunchCount: 0,   // 某天已打卡人数
        totalStaffCount: 0,    // 需打卡总人数
        options: [{
          text: '删除',
          style: {
            backgroundColor: '#007aff'
          }
        }],
        viewWidth: '', // 缺省部分宽度
        viewHeight: '' // 缺省部分高度
      }
    },
    options: {
      styleIsolation: 'shared'
    },
    computed: {
      ...mapState('m_user', ['userInfo', 'token', 'userData'])
    },
    created() {
      uni.$on('isSDKReady', value => {
        this.updateMyProfile()
      });
      this.getCurrentDate()
      this.getCourseList(this.token)
    },
    methods: {
      // 修改聊天个人信息
      updateMyProfile() {
        uni.$TUIKit
          .updateMyProfile({
            avatar: this.userInfo.avatar,
            nick: this.userInfo.nickName
          })
          .then(imResponse => {
            // 更新资料成功
            console.log('update', imResponse.data);
          })
          .catch((imError) => {
            // 更新资料失败
            console.warn('updateMyProfile error:', imError);
          });
      },
      // 得到当天日期
      getCurrentDate() {
        let date = new Date()
        let fullYear = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        this.currentDate = fullYear + '-' + month + '-' + day
        this.selDate = this.currentDate
      },
      // 选择日期确认
      confirmDate(e) {
        this.selDate = e
        this.calculatePunchResult()
      },
      // 跳转页面查看打卡结果
      lookUpPunchRes() {
        if (JSON.stringify(this.punchResInfo) !== '{}') {
          uni.navigateTo({
            url: '/pages/lookUpPunchRes/lookUpPunchRes?punchResInfo=' + encodeURIComponent(JSON.stringify(this.punchResInfo))
          })
        }
      },
      // 是否显示打卡结果组件
      isShowPunchResComponent() {
        if (!this.isEdit && this.isUploadMethod && this.isUploadStaff && this.isUploadTime) {
          this.showPunResCom = true
          this.calculatePunchResult()
        } else {
          this.showPunResCom = false
        }
      },
      // 计算打卡结果
      calculatePunchResult() {
        this.punchResInfo = {}
        this.alreadyPunchCount = 0
        this.totalStaffCount = 0
        let date = new Date(this.selDate)
        let currentWeek = date.getDay()
        let isInClockDate = false
        let weekMap = new Map([
          [0, '日'],
          [1, '一'],
          [2, '二'],
          [3, '三'],
          [4, '四'],
          [5, '五'],
          [6, '六']
        ])
        for (let item of this.clockList) {
          if (weekMap.get(currentWeek) === item.date) {
            // 所选择的日期在需打卡时间列表里面
            isInClockDate = true
            break
          }
        }
        if (isInClockDate) {
          let res = this.calculateAlreadyPunchStaffCount()
          if (res.punch) {
            // 所选择的日期在已打卡列表中
            this.alreadyPunchCount = res.punch.punchList.length
          }
          this.getPunchList(this.selectedCourse.staffList, res)
          this.totalStaffCount = this.selectedCourse.staffList.length
        }
      },
      // 获取打卡结果
      getPunchList(staffList, punchInfo) {
        this.punchResInfo.punchResList = staffList
        this.punchResInfo.course_id = this.selectedCourse._id
        this.punchResInfo.date = punchInfo.date
        for (let item of this.punchResInfo.punchResList) {
          item.isPunch = false
        }
        if (punchInfo.punch) {
          for (let item1 of punchInfo.punch.punchList) {
            for (let item2 of this.punchResInfo.punchResList) {
              if (item1.code === item2.code) {
                item2.isPunch = true
              }
            }
          }
        }
      },
      // 返回某天已打卡信息
      calculateAlreadyPunchStaffCount() {
        let count = 0
        let year = this.selDate.split('-')[0]
        let month = +this.selDate.split('-')[1]
        let day = +this.selDate.split('-')[2]
        let dateStr = year + '.' + month + '.' + day
        let punchInfo = {}  // 某天的打卡信息
        punchInfo.date = dateStr
        if (this.selectedCourse.alreadyPunchStaffList) {
          for (let item of this.selectedCourse.alreadyPunchStaffList) {
            if (dateStr === item.date) {
              punchInfo.punch = item
              break
            }
          }
        }
        return punchInfo
      },
      // 设置缺省部分宽高
      autoView(e) {
        uni.getSystemInfo({
          complete: (res) => {
            this.viewWidth = res.windowWidth + 'px'
            this.viewHeight = res.windowHeight - 42.5 + 'px'
          }
        })
      },
      // 打开窗口
      showDrawer(e) {
        if (this.isEdit) return
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
      // 添加课程
      addCourse() {
        if (this.isEdit) return
        this.$refs.inputDialog.open()
      },
      // 添加课程对话框确认
      async dialogInputConfirm(val) {
        uni.hideLoading()
        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close()
        let obj = {
          token: this.token,
          courseName: val
        }
        const courseHelper = uniCloud.importObject('courseHelper')
        let res = await courseHelper.addNewCourse(obj)
        if (res.code === 200) {
          uni.$showMsg(res.message, 'success')
        } else if (res.code === 401) {
          uni.$showMsg(res.message, 'error')
        } else {
          uni.$showMsg(res.message, 'error')
        }
        this.getCourseList(this.token)
      },
      // 加载课程列表
      async getCourseList(token) {
        const courseHelper = uniCloud.importObject('courseHelper')
        let res = await courseHelper.getCourseList(token)
        if (res.code === 201) {
          if (res.data.length) {
            this.courseList = res.data
            this.getCourseInfo(token, this.courseList[0]._id)
          }
        } else if (res.code === 402) {
          uni.$showMsg(res.message, 'error')
        }
      },
      // 加载某课程信息
      async getCourseInfo(token, course_id) {
        const courseHelper = uniCloud.importObject('courseHelper')
        let res = await courseHelper.getCourseInfo(token, course_id)
        if (res.code === 403) {
          uni.$showMsg(res.message, 'none')
        } else {
          this.selectedCourse = res
          console.log(this.selectedCourse)
          this.showPage = true
          if (this.selectedCourse.clockList) {
            this.clockList = this.selectedCourse.clockList
          }
          this.isUploadTime = false
          this.isUploadMethod = false
          this.isUploadStaff = false
          if (this.selectedCourse.clockList !== undefined) {
            this.isUploadTime = true
          }
          if (this.selectedCourse.staffList !== undefined) {
            this.isUploadStaff = true
          }
          if (this.selectedCourse.method !== '') {
            this.isUploadMethod = true
          }
          this.isShowPunchResComponent()
        }
      },
      // 根据位置信息打开地图
      openLocation(latitude, longitude) {
        if (this.selectedCourse.method === '定位打卡' && latitude && longitude) {
          uni.openLocation({
            latitude: latitude,
            longitude: longitude,
            success: () => {
              console.log('success')
            }
          })
        }
      },
      // 选择打卡方式
      selectMethodOfClock(method) {
        this.methodOfClock = method
        if (method === '定位打卡') {
          this.getMapLocation()
        } else {
          this.location = {}
          this.upLoadMethod()
        }
        this.$refs.popupMethod.close()
      },
      // 腾讯地图定位功能
      getMapLocation() {
        uni.getSetting({
          success: (res) => {
            // 用户已授权地理位置
            if (res.authSetting['scope.userLocation']) {
              uni.chooseLocation({
                success: (res) => {
                  this.location.name = res.name
                  this.location.address = res.address
                  this.location.latitude = res.latitude
                  this.location.longitude = res.longitude
                  this.upLoadMethod()
                },
                fail: () => {
                  uni.$showMsg('获取定位失败或用户取消', 'none')
                }
              })
            }
            // 用户地理位置处于关闭状态
            else if (res.authSetting['scope.userLocation'] === undefined) {
              uni.authorize({
                scope: 'scope.userLocation',
                success: (res) => {
                  // 用户同意授权
                  uni.chooseLocation({
                    success: (res) => {
                      this.location.name = res.name
                      this.location.address = res.address
                      this.location.latitude = res.latitude
                      this.location.longitude = res.longitude
                      this.upLoadMethod()
                    },
                    fail: () => {
                      uni.$showMsg('获取定位失败或用户取消', 'none')
                    }
                  })
                }
              })
            }
          },
          fail: () => {
            uni.$showMsg('获取授权信息失败', 'none')
          }
        })
      },
      // 上传打卡方式到数据库
      async upLoadMethod() {
        const courseHelper = uniCloud.importObject('courseHelper')
        let result = await courseHelper.addMethod(this.token, this.methodOfClock, this.location, this.selectedCourse
          ._id)
        if (result.updated !== 0 && result.code === undefined) {
          this.isUploadMethod = true
          uni.$showMsg('更新成功', 'success')
        } else if (result.code === 403) {
          uni.$showMsg('更新失败', 'none')
        }
      },
      // 选择课程
      activeChanged(i) {
        this.active = i
        this.clockList = []
        this.getCourseInfo(this.token, this.courseList[i]._id)
      },
      // 改变编辑状态
      changeEditStatus() {
        if (!this.isEdit) {
          this.isEdit = true
          this.isShadow = true
        } else {
          if (this.isUploadMethod && this.isUploadStaff && this.isUploadTime) {
            this.isEdit = false
            this.isShadow = false
            this.getCourseInfo(this.token, this.selectedCourse._id)
          } else {
            uni.$showMsg('请设置完全部项', 'none')
          }
        }
      },
      // 底部弹窗
      toggle(type, mode) {
        if (this.isEdit) {
          this.mode = mode
          if (mode === 'time') {
            this.$refs.popupTime.open(type)
          } else if (mode === 'method') {
            this.$refs.popupMethod.open(type)
          } else if (mode === 'staff') {
            wx.chooseMessageFile({
              count: 1,
              type: 'file',
              success: (res) => {
                // 判断文件类型
                let fileType = res.tempFiles[0].name.substring(res.tempFiles[0].name.lastIndexOf('.') + 1)
                if (fileType !== 'xlsx' && fileType !== 'xls') {
                  uni.$showMsg('选择的文件不是excel文件，请重新选择!', 'none')
                } else {
                  this.fileName = res.tempFiles[0].name
                  let path = res.tempFiles[0].path
                  this.uploadExcel(path, fileType)
                }
              },
              fail: err => {
                console.log(err)
              }
            });
          }
        } else {
          if (mode === 'time') {
            if (this.selectedCourse.clockList) {
              this.$refs.popupAttendanceTime.open('center')
            }
          } else if (mode === 'method') {
            if (this.selectedCourse.method) {
              this.$refs.popupAttendanceMethod.open('center')
            }
          } else {
            if (this.selectedCourse.staffList) {
              uni.navigateTo({
                url: '/pages/lookUpStaff/lookUpStaff?staff=' + encodeURIComponent(JSON.stringify(this.selectedCourse
                  .staffList))
              })
            }
          }
        }
      },
      // 上传文件到云端
      uploadExcel(filePath, fileType) {
        uniCloud.uploadFile({
          filePath: filePath,
          cloudPath: new Date().getTime() + '.' + fileType,
          success: (res) => {
            this.parseFile(res.fileID)
          },
          fail: () => {
            uni.$showMsg('文件上传失败', 'error')
          }
        })
      },
      // 解析上传的文件
      async parseFile(fileID) {
        const parseExcel = uniCloud.importObject('parseExcel')
        let res = await parseExcel.parseF(fileID, this.selectedCourse._id, this.token)
        if (res.code === 200) {
          this.isUploadStaff = true
          uni.$showMsg('解析文件成功', 'success')
        } else {
          uni.$showMsg('解析文件失败', 'none')
        }
      },
      // 关闭设置时间的底部弹窗
      async timeClose() {
        if (this.chackClockList()) {
          if (JSON.stringify(this.clockList) !== '[]') {
            const courseHelper = uniCloud.importObject('courseHelper')
            let res = await courseHelper.addClockList(this.token, this.clockList, this.selectedCourse._id)
            if (res.code === 200) {
              this.isUploadTime = true
              uni.$showMsg(res.message, "success")
            } else {
              uni.$showMsg(res.message, "error")
            }
            this.$refs.popupTime.close()
          } else {
            uni.$showMsg("请设置打卡时间", "none")
          }
        } else {
          uni.$showMsg("日期存在冲突，请重新设置", "none")
        }
      },
      // 设置时间完成
      timeOk() {
        if ((+this.hourOfStart > +this.hourOfEnd) || (+this.hourOfStart > +this.hourOfEnd && +this.minuteOfStart >= +
            this.minuteOfEnd) || (+this.hourOfStart === +this.hourOfEnd && +this.minuteOfStart >= +this.minuteOfEnd)) {
          uni.$showMsg("时间有误，请重新设置", "none")
        } else if (this.note === '') {
          uni.$showMsg("请选择打卡日期", "none")
        } else {
          let timeObj = this.clockInfoToStr(this.hourOfStart, this.minuteOfStart, this.hourOfEnd, this.minuteOfEnd)
          let obj = {
            ...timeObj,
            date: this.note.substring(2)
          }
          this.clockList.push(obj)
          this.note = ''
        }
      },
      // 左滑时间列表项
      swipeItemClickHandler(i) {
        for (let j = i + 1; j < this.clockList.length; j++) {
          this.clockList[j - 1] = this.clockList[j]
        }
        this.clockList.pop()
      },
      // 检查打卡时间列表
      chackClockList() {
        let set = new Set()
        let flag = 0
        for (let item of this.clockList) {
          let fre = item.date
          if (fre.length > 1) {
            let spl = fre.split('、')
            for (let i of spl) {
              if (!set.has(i)) {
                set.add(i)
              } else {
                flag = 1
                break
              }
            }
          } else {
            if (!set.has(fre)) {
              set.add(fre)
            } else {
              flag = 1
              break
            }
          }
          if (flag === 1) return false
        }
        return flag === 1 ? false : true
      },
      // 时间信息转为字符串
      clockInfoToStr(hourOfStart, minuteOfStart, hourOfEnd, minuteOfEnd) {
        let hs = this.wordToStr(hourOfStart)
        let ms = this.wordToStr(minuteOfStart)
        let he = this.wordToStr(hourOfEnd)
        let me = this.wordToStr(minuteOfEnd)
        return {
          timeOfStart: hs + ':' + ms,
          timeOfEnd: he + ':' + me
        }
      },
      // 转为带前导0字符串
      wordToStr(word) {
        if (typeof word === 'string') {
          if (word.length === 1) {
            word = '0' + word
          }
        } else {
          if (word < 10) {
            word = '0' + word
          } else {
            word = '' + word
          }
        }
        return word
      },
      // 选择开始时间
      bindChangeOfStart: function(e) {
        const val = e.detail.value
        this.hourOfStart = this.hoursOfStart[val[0]]
        this.minuteOfStart = this.minutesOfStart[val[1]]
      },
      // 选择结束时间
      bindChangeOfEnd: function(e) {
        const val = e.detail.value
        this.hourOfEnd = this.hoursOfEnd[val[0]]
        this.minuteOfEnd = this.minutesOfEnd[val[1]]
      },
      // 选择打卡日期
      selectDate() {
        uni.navigateTo({
          url: '/pages/selRecurDate/selRecurDate'
        })
      },
      // 二级页面返回时调用
      regionBindClick(data) {
        if (data.length !== 0) {
          let date = data.join('、')
          this.note = date
        } else {
          this.note = ''
        }
      },
      // 确定打卡日期
      changeDate(e) {
        this.noteOfDate = e
        this.note = this.noteOfDate
      },
      // 二级页面返回时调用
      regionBindClick(data) {
        if (data.length !== 0) {
          let date = '每周' + data.join('、')
          this.note = date
        } else {
          this.note = ''
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .teacher {
    .page-top {
      height: 85rpx;
      background-color: #fff;
      padding: 0 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      image {
        width: 60rpx;
        height: 60rpx;
      }
    }

    .card-top {
      height: 75rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2rpx solid #f5f5f5;
      padding: 0 5rpx;

      .left {
        .classImage {
          width: 50rpx;
          height: 50rpx;
          vertical-align: bottom;
          margin-right: 10rpx;
        }
      }

      .extraImage {
        width: 45rpx;
        height: 45rpx;
      }
    }

    .card-body {
      /deep/ .uni-list-item {
        height: 85rpx;
        background-color: #fff;

        .uni-list-item__container {
          padding: 8px 5px 8px 15px;
        }

        .uni-icon-wrapper {
          padding: 0 10px 0 0;
        }
      }
    }

    .editTime {
      .popupTimeStyle {
        height: 900rpx;
        padding: 30rpx 20rpx 0 20rpx;

        .top {
          display: flex;
          justify-content: space-between;

          image {
            width: 50rpx;
            height: 50rpx;
          }
        }

        .selectTime {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 50rpx;

          .middle {
            margin-top: 20rpx;
            height: 2rpx;
            width: 40rpx;
            background-color: #413f3f;
            transform: scaleY(0.5);
            transform-origin: 50% 100%;
          }

          .picker-view {
            width: 300rpx;
            height: 200rpx;
            margin-top: 20rpx;

            .item {
              text-align: center;
              line-height: 40px;
            }
          }
        }

        .selectDate {
          margin-top: 20rpx;

          .disappear {
            display: none;
          }
        }

        .clockList {
          margin-top: 20rpx;
        }

        .timeList {
          margin-top: 20rpx;
        }
      }
    }

    .selectMethod {
      .clockType {
        display: flex;
        flex-direction: column;

        button {
          width: 100%;
          height: 90rpx;
          border: none;
          border-bottom: 1rpx solid #eaeaea;
          font-size: 34rpx;
        }

        button:last-child {
          border: none;
        }
      }
    }

    .readAttendanceTime,
    .readAttendanceMethod {
      .body {
        width: 600rpx;

        .slot-methodNote {
          font-size: 28rpx;
          color: #3b4144;
        }

        .slot-methodNoteInfo {
          width: 200rpx;
          text-align: right;
          color: #999;
          font-size: 12px;
        }
      }
    }

    .hasTeaData {
      .readPunch {
        background-color: #fff;
        margin: 0 20rpx;

        .pickBody {
          background-color: #fff;
          padding: 10px;

          /deep/ .uni-date-editor {
            .uni-date__x-input {
              padding-left: 15rpx;
            }
          }
        }
        
        .circleProgress {
          margin-top: 60rpx;
        }
      }
    }

  }

  .drawer {
    /deep/ .active {
      .uni-list-item {
        background-color: #fff !important;
      }
    }
  }

  .drawer {
    /deep/ .uni-list-item {
      background-color: #f5f5f5 !important;
    }
  }

  .close {
    height: 85rpx;
    background-color: #fff;
    padding: 0 20rpx;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    image {
      width: 60rpx;
      height: 60rpx;
    }
  }
  
  .noTeaData {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
