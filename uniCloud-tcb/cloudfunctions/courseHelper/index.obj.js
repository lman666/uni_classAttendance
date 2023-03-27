// let jwt = require('jwt-simple')
// const jstSecret = 'jstSecret' // 秘钥

// // 验证token
// async function verifyToken(token) {
//   if (token) {
//     let decoded = jwt.decode(token, jstSecret) // 解析token
//     const db = uniCloud.database()
//     let res = await db.collection('user').where({ // 验证该用户是否存在
//       openid: decoded.openid
//     }).count()
//     return res.total === 1
//   } else {
//     return
//   }
// }

// // 解析token
// function decodeToken(token) {
//   if (token) {
//     let decoded = jwt.decode(token, jstSecret); // 解析token
//     return decoded.openid
//   } else {
//     return
//   }
// }

const {
  verifyToken,
  decodeToken
} = require('vali-token')

let success1 = {
  code: 200,
  message: "添加成功"
}
let success2 = {
  code: 201,
  message: "加载成功"
}
let success3 = {
  code: 202,
  message: "更新成功"
}
let fail1 = {
  code: 400,
  message: '添加失败'
}
let fail2 = {
  code: 401,
  message: '该课程已存在'
}
let fail3 = {
  code: 402,
  message: '加载失败'
}
let fail4 = {
  code: 403,
  message: '更新失败'
}

// 时间字符串转化为时间戳
function timeToStamp(timeStr) {
  let timeStrOfStart = timeStr.split(' — ')[0]
  let timeStrOfEnd = timeStr.split(' — ')[1]
  let hourOfStart = +timeStrOfStart.split(':')[0]
  let minuteOfStart = +timeStrOfStart.split(':')[1]
  let hourOfEnd = +timeStrOfEnd.split(':')[0]
  let minuteOfEnd = +timeStrOfEnd.split(':')[1]
  let timeStampOfStart = hourOfStart * 3600 + minuteOfStart * 60
  let timeStampOfEnd = hourOfEnd * 3600 + minuteOfEnd * 60
  return {
    timeStampOfStart,
    timeStampOfEnd
  }
}

module.exports = {
  _before: function() { // 通用预处理器

  },
  
  // 添加新课程
  async addNewCourse(object) {
    if (verifyToken(object.token)) {
      let openid = decodeToken(object.token)
      const db = uniCloud.database()
      let res = await db.collection('course').where({ // 验证该课程是否存在
        openid: openid,
        courseName: object.courseName
      }).count()
      if (res.total === 1) { // 课程已经存在
        return fail2
      }
      let obj = {
        openid: openid, // 教师用户openid
        courseName: object.courseName, // 课程名称
        method: '', // 打卡方法
        location: {} // 打卡地点
      }
      db.collection("course").add(obj)
      return success1
    } else {
      return fail1
    }
  },

  // 加载课程信息
  async getCourseList(token) {
    if (token && verifyToken(token)) {
      let openid = decodeToken(token)
      const db = uniCloud.database()
      let res = await db.collection('course').where({
        openid: openid
      }).get()
      res.code = 201
      res.message = '加载成功'
      return res
    } else if (token) {
      return fail3
    } else {
      return
    }
  },

  // 加载某课程信息
  async getCourseInfo(token, course_id) {
    if (token && verifyToken(token)) {
      const db = uniCloud.database()
      let clockOfCourse = {}  // 课程打卡列表
      let staffOfCourse = {}   // 课程打卡人员列表
      let alreadyPunchStaff = {}   // 课程已打卡人员列表
      const courseBasicInfo = await db.collection('course').where({
        _id: course_id
      }).get()
      let totalOfClock = await db.collection('clock').where({
        course_id: course_id
      }).count()
      if (totalOfClock.total === 1) {
        clockOfCourse = await db.collection('clock').where({
          course_id: course_id
        }).get()
      }
      let totalOfStaff = await db.collection('staff').where({
        course_id: course_id
      }).count()
      if (totalOfStaff.total === 1) {
        staffOfCourse = await db.collection('staff').where({
          course_id: course_id
        }).get()
      }
      let totalOfAlreadyPunchStaff = await db.collection('punchClock').where({
        course_id: course_id
      }).count()
      if (totalOfAlreadyPunchStaff.total !== 0) {
        alreadyPunchStaff = await db.collection('punchClock').where({
          course_id: course_id
        }).field({
          date: true,
          punchList: true
        }).get()
      }
      let res = courseBasicInfo.data[0]
      if (JSON.stringify(clockOfCourse) !== '{}') {
        res.clockList = clockOfCourse.data[0].clockList
      }
      if (JSON.stringify(staffOfCourse) !== '{}') {
        res.staffList = staffOfCourse.data[0].data
      }
      if (JSON.stringify(alreadyPunchStaff) !== '{}') {
        res.alreadyPunchStaffList = alreadyPunchStaff.data
      }
      res.code = 200
      res.message = '获取课程信息成功'
      return res
    } else {
      return fail3
    }
  },

  // 添加打卡时间列表
  async addClockList(token, clockList, course_id) {
    let clockListOfObj = []
    const db = uniCloud.database()
    await db.collection('clock').where({
      course_id
    }).remove()
    if (token && verifyToken(token)) {
      let openid = decodeToken(token)
      for (let item of clockList) {
        let dateStr = item.date
        if (dateStr.length > 1) {
          let arr = dateStr.split('、')
          for (let i of arr) {
            let obj = {
              timeOfStart: item.timeOfStart,
              timeOfEnd: item.timeOfEnd,
              date: i
            }
            clockListOfObj.push(obj)
          }
        } else {
          let obj = {
            timeOfStart: item.timeOfStart,
            timeOfEnd: item.timeOfEnd,
            date: dateStr
          }
          clockListOfObj.push(obj)
        }
      }
      db.collection('clock').add({
        course_id: course_id,
        clockList: clockListOfObj
      })
      return success1
    } else {
      return fail1
    }
  },

  // 添加打卡方法
  async addMethod(token, method, location, courseId) {
    if (token && verifyToken(token)) {
      const db = uniCloud.database()
      let res = await db.collection("course").where({
        _id: courseId
      }).update({
        method: method,
        location: location
      })
      return res
    } else {
      return fail4
    }
  },
  
  // 根据学生信息查询课程
  async getCourInfoAccordingToStuInfo(token, stuCode, stuSchool) {
    if (token && verifyToken(token)) {
      const db = uniCloud.database()
      let res = await db.collection('staff').where({
        data: {
          code: stuCode,
          school: stuSchool
        }
      }).get()
      let courseIdList = []
      for (let item of res.data) {
        courseIdList.push(item.course_id)
      }
      return courseIdList
    } else {
      return fail3
    }
  }
}
