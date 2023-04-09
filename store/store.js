import Vue from 'vue'
import Vuex from 'vuex'
import moduleUser from '@/store/user.js'
import moduleStuCourseInfo from '@/store/stuCourseInfo.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    'm_user': moduleUser,
    'm_stuCourseInfo': moduleStuCourseInfo
  }
})

export default store