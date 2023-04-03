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

let fail1 = {
  code: 400,
  message: "表单与历史数据不符"
}
let fail2 = {
  code: 401,
  message: "失败"
}
let fail3 = {
  code: 402,
  message: "查无此人"
}
let success1 = {
  code: 200,
  message: "成功"
}
let success2 = {
  code: 201,
  message: "数据已是最新"
}

const db = uniCloud.database()

// 验证数据库是否存在信息
async function isExist(info) {
  let userInfo = await db.collection('user').where({
    openid: info.openid
  }).field({
    school: true,
    name: true,
    code: true,
    role: true
  }).get()
  if (userInfo.data.length) {
    if (userInfo.data[0].school !== info.school || userInfo.data[0].name !== info.name || userInfo.data[0].code !==
      info.code || userInfo.data[0].role !== info.role) {
      return fail1
    } else if (info.role === 1) {
      let updatePhotoRes = await db.collection('user').where({
        openid: info.openid
      }).update({
        stuBase64Photo: info.stuBase64Photo
      })
      return success1
    } else {
      return success1
    }
  } else {
    return fail2
  }
}

module.exports = {
  _before: function() { // 通用预处理器

  },
  /**
   * 首次提交信息
   * @param {object} info 信息对象
   * @returns {object} 返回值描述
   */

  async reg(info) {
    let totalOfUser = await db.collection('user').where({
      openid: info.openid
    }).count()
    if (totalOfUser.total === 0) {
      await db.collection("user").add(info)
      return success1
    } else {
      let vailRes = await isExist(info)
      return vailRes
    }
  },

  // 更改照片
  async changePhoto(token, stuBase64Photo) {
    if (token && verifyToken(token)) {
      let openid = decodeToken(token)
      let updatePhotoRes = await db.collection('user').where({
        openid: openid
      }).update({
        stuBase64Photo: stuBase64Photo
      })
      if (updatePhotoRes.updated === 0) {
        return success2
      } else {
        return success1
      }
    } else {
      return fail2
    }
  },

  // 更改头像昵称
  async changeAvatarAndNick(token, nick, avatar) {
    if (token && verifyToken(token)) {
      let openid = decodeToken(token)
      let updateRes = await db.collection('user').where({
        openid: openid
      }).update({
        nickName: nick,
        avatar: avatar
      })
      if (updateRes.updated === 0) {
        return success2
      } else {
        return success1
      }
    } else {
      return fail2
    }
  },

  // 根据学校姓名学号查找用户
  async searchUser(token, userObj) {
    if (token && verifyToken(token)) {
      let user = await db.collection('user').where({
        name: userObj.name,
        code: userObj.code,
        school: userObj.school,
        role: 1
      }).field({
        openid: true
      }).get()
      if (user.data.length) {
        success1.openid = user.data[0].openid
        return success1
      } else {
        return fail3
      }
    } else {
      return fail2
    }
  }
}
