// let jwt = require('jwt-simple')
// const jstSecret = 'jstSecret' // 秘钥

// // 生成token
// function getToken(openid) {
//   const payload = {
//     openid
//   }
//   let token = jwt.encode(payload, jstSecret) // 生成token
//   return token
// }

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
  getToken,
  verifyToken,
  decodeToken
} = require('vali-token')

module.exports = {
  getToken,
  verifyToken,
  decodeToken
}