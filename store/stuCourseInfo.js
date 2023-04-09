export default {
  // 开启命名空间
  namespaced: true,
  
  // 数据
  state: () => ({
    // 学生课程信息
    m_stuCourseInfoList: [],
  }),
  
  // 方法
  mutations: {
    // 更新学生课程信息
    updateM_stuCourseInfoList(state, m_stuCourseInfoList) {
      state.m_stuCourseInfoList = m_stuCourseInfoList
    }
  }
}