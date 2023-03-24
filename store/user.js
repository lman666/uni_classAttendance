export default {
  // 开启命名空间
  namespaced: true,
  
  // 数据
  state: () => ({
    // 用户信息
    userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}'),
    token: uni.getStorageSync('token') || '',
    userData: JSON.parse(uni.getStorageSync('userData') || '{}')
  }),
  
  // 方法
  mutations: {
    // 更新用户信息
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      this.commit('m_user/saveUserInfoToStorage');
    },
    
    // 持久化存储userinfo
    saveUserInfoToStorage(state) {
      uni.setStorageSync('userInfo', JSON.stringify(state.userInfo));
    },
    
    // 更新登录态
    updateToken(state, token) {
      state.token = token;
      this.commit('m_user/saveTokenToStorage');
    },
    
    // 持久化存储登录态
    saveTokenToStorage(state) {
      uni.setStorageSync('token', state.token);
    },
    
    // 更新用户数据
    updateUserData(state, userData) {
      delete userData.photo
      state.userData = userData
      this.commit('m_user/saveUserDataToStorage')
    },
    
    // 持久化存储用户数据
    saveUserDataToStorage(state) {
      uni.setStorageSync('userData', JSON.stringify(state.userData));
    }
    
    // 存储数据到数据库
    // saveData(state, openid) {
    //   console.log(state.userInfo)
    //   let obj = { ...state.userData, ...state.userInfo, openid };
    //   console.log(obj);
    // }
  }
}