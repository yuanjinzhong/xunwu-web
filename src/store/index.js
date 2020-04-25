import Vue from 'vue'
import Vuex from 'vuex'
import navigationModule from '@/store/module/navigation'

Vue.use(Vuex)

//模块化的方式搞vuex
export default new Vuex.Store({
    //导航栏的状态模块
    modules: {navigationModule}
})
