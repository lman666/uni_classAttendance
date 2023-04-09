// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
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

// 从数据库中下载base64图片
async function installImage(openid) {
  const db = uniCloud.database()
  let res = await db.collection('user').where({
    openid: openid
  }).field({
    stuBase64Photo: true
  }).get()
  if (res.data.length) {
    success2.stuPhoto = res.data[0].stuBase64Photo
    return success2
  } else {
    return fail2
  }
}

// 申请access_token
async function getAccessToken() {
  let APIKey = '8XcADnbwzejWkUH4NrXkp3YL'
  let secretKey = 'Gtrw2Rxfe0GAGgKqzA7UnIg88igIx05s'
  let url = 'https://aip.baidubce.com/oauth/2.0/token'
  const res = await uniCloud.httpclient.request(url, {
    method: 'POST',
    data: {
      grant_type: 'client_credentials',
      client_id: APIKey,
      client_secret: secretKey
    },
    dataType: 'json'
  })
  return res
}

// 调用人脸识别api
async function discriminate(stuBasePhoto, basePhoto, access_token) {
  let url = 'https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=' + access_token
  const res = await uniCloud.httpclient.request(url, {
    method: 'POST',
    data: [{
        image: stuBasePhoto,
        image_type: "BASE64",
        face_type: "LIVE",
        quality_control: "LOW",
        liveness_control: "LOW"
      },
      {
        image: basePhoto,
        image_type: "BASE64",
        face_type: "LIVE",
        quality_control: "LOW",
        liveness_control: "LOW"
      }
    ],
    contentType: 'json',
    dataType: 'json'
  })
  return res
}

let success1 = {
  code: 200,
  message: '签到成功'
}
let success2 = {
  code: 201,
  message: '人脸识别成功'
}
let fail1 = {
  code: 400,
  message: '签到失败'
}
let fail2 = {
  code: 401,
  message: '人脸识别失败'
}
let fail3 = {
  code: 403,
  message: '该学生已打卡，不可重复打卡'
}
let fail4 = {
  code: 404,
  message: '失败'
}

module.exports = {
  _before: function() { // 通用预处理器

  },
  // 签到
  // obj: { course_id, code, name, date, time, isLate }
  async punchTheClock(token, obj) {
    if (token && verifyToken(token)) {
      let stuObj = {
        code: obj.code,
        name: obj.name,
        school: obj.school,
        time: obj.time ? obj.time : '',
        isLate: obj.isLate
      }
      const db = uniCloud.database()
      let res1 = await db.collection('punchClock').where({
        course_id: obj.course_id,
        date: obj.date
      }).count()
      if (res1.total === 1) {
        let punchRes = await db.collection('punchClock').where({
          course_id: obj.course_id,
          date: obj.date
        }).field({
          punchList: true
        }).get()
        let list = punchRes.data[0].punchList
        for (let item of list) {
          if (item.code === stuObj.code) {
            return fail3
          }
        }
        list.push(stuObj)
        let res2 = await db.collection('punchClock').where({
          course_id: obj.course_id,
          date: obj.date
        }).update({
          punchList: list
        })
        if (res2.updated !== 0) {
          return success1
        } else {
          return fail1
        }
      } else {
        let list = []
        list.push(stuObj)
        let res3 = await db.collection('punchClock').add({
          course_id: obj.course_id,
          date: obj.date,
          punchList: list
        })
        if (res3.inserted !== 0) {
          return success1
        } else {
          return fail1
        }
      }
    } else {
      return fail1
    }
  },

  // 检查是否已签到
  async checkAlreadyPunch(token, date, course_id, code) {
    if (token && verifyToken(token)) {
      const db = uniCloud.database()
      let punchRes = await db.collection('punchClock').where({
        course_id: course_id,
        date: date
      }).field({
        punchList: true
      }).get()
      if (punchRes.data.length) {
        let list = punchRes.data[0].punchList
        for (let item of list) {
          if (code === item.code) {
            return true
          }
        }
        return false
      } else {
        return false
      }
    } else {
      return
    }
  },

  // 将传过来的照片进行人脸比对
  async faseDetect(token, base64Photo) {
    if (token && verifyToken(token)) {
      let openid = decodeToken(token)
      let res = await installImage(openid)
      if (res.code === 201) {
        let stuBasePhoto = res.stuPhoto.replace(/^data:image\/\w+;base64,/, "")
        let basePhoto = base64Photo.replace(/^data:image\/\w+;base64,/, "")
        let result1 = await getAccessToken()
        let access_token = result1.data.access_token
        let result2 = await discriminate(stuBasePhoto, basePhoto, access_token)
        if (result2.data.error_msg === 'SUCCESS' && result2.data.result.score >= 80) {
          return success2
        } else {
          return fail2
        }
      }
    } else {
      return fail2
    }
  },

  // 查看某天的打卡信息
  async getPunchInfoOfDay(token, date, courseInfoListOfPunchWeek, stuInfo) {
    if (token && verifyToken(token)) {
      let punchInfoOfDayList = []
      const db = uniCloud.database()
      for (let item of courseInfoListOfPunchWeek) {
        let punchRes = await db.collection('punchClock').where({
          course_id: item.course_id,
          date: date,
          punchList: {
            code: stuInfo.code,
            name: stuInfo.name,
            school: stuInfo.school
          }
        }).field({
          course_id: true,
          punchList: true
        }).get()
        if (punchRes.data.length) {
          for (let item of punchRes.data[0].punchList) {
            if (item.code === stuInfo.code && item.name === stuInfo.name && item.school === stuInfo.school) {
              let punchInfoObj = item
              punchInfoObj.course_id = punchRes.data[0].course_id
              punchInfoOfDayList.push(punchInfoObj)
              break
            }
          }
        }
      }
      return punchInfoOfDayList
    } else {
      return fail4
    }
  }
}
