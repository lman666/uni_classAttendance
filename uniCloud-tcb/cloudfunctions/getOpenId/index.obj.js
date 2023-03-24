// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
  _before: function() { // 通用预处理器

  },
  
  /**
   * 获取openId
   * @param {String} code
   * @@return {Object} res
   */
  async exam(code) {
    let appId = 'wx10b62cb68c3e90a0'
    let secret = '941fab0b215873c7da4bbb4141e9e617'
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' +
      code + '&grant_type=authorization_code'
    const res = await uniCloud.httpclient.request(url, {
        method: 'POST',
        dataType: 'json'
    })
    return res
  }
}
