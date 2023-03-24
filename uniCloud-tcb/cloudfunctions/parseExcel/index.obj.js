// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
var xlsx = require('node-xlsx')   //引用node-xlsx依赖
let jwt = require('jwt-simple')
const jstSecret = 'jstSecret' // 秘钥

// 验证token
async function verifyToken(token) {
  if (token) {
    let decoded = jwt.decode(token, jstSecret) // 解析token
    const db = uniCloud.database()
    let res = await db.collection('user').where({ // 验证该用户是否存在
      openid: decoded.openid
    }).count()
    return res.total === 1
  } else {
    return
  }
}

// 解析token
function decodeToken(token) {
  if (token) {
    let decoded = jwt.decode(token, jstSecret); // 解析token
    return decoded.openid
  } else {
    return
  }
}

// 解析excel表格失败
var fail1 = {
  code: 400,
  message: 'excel表格格式错误'
}
var fail2 = {
  code: 401,
  message: '上传文件失败'
}
var success = {
  code: 200,
  message: '上传文件成功'
}
// 上传excel数据到数据库
  async function uploadData(excel_data, courseId) {
    const db = uniCloud.database()
    // 先删除数据表中的数据再更新数据
    const dbCmd = db.command
    await db.collection("staff").where({
      course_id: courseId
    }).remove()
    var result = await db.collection('staff').add({
      course_id: courseId,
      data: excel_data
    }).then(res => {
      return success
    }).catch(err => {
      return fail2
    })
    return result
  }
module.exports = {
  _before: function() { // 通用预处理器

  },
  /**
   * method1方法描述
   * @param {string} param1 参数1描述
   * @returns {object} 返回值描述
   */
  // 解析excel文件
  async parseF(fileID, courseId, token) {
    if (token && verifyToken(token)) {
      // 通过fileID下载云存储里的excel文件
        let result = await uniCloud.downloadFile({
          fileID: fileID
        })
        let buffer = result.fileContent
        // 存储excel数据
        let excel_data = []
        // 解析excel文件里的数据
        //获取到所有sheets，因为表格可能会有多张表
        let sheets = xlsx.parse(buffer);
        // 对每张表进行解析
        try {
          sheets.forEach((sheet) => {
            for (let rowId in sheet['data']) {
              // 获取到表格的每一行
              let row = sheet['data'][rowId]
              // 表格格式错误
              if (rowId === '0' && (row.length !== 3 || row[0] !== '学校' || row[1] !== '学号' || row[2] !== '姓名')) {
                // 抛出错误，退出循环
                throw new Error("表格格式错误");
              }
              if (row.length && +rowId >= 1) {
                excel_data.push({
                  school: row[0],
                  code: row[1],
                  name: row[2]
                })
              }
            }
          })
        } catch (err) {
          if (err.message === "表格格式错误")
            return fail
          else
            return err
        }
        // 上传数据
        let res = uploadData(excel_data, courseId)
        return res
      } else {
        return fail2
      }
    }
}