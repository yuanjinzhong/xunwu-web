//导航栏的状态模块
export default {
    state: {
        drawer: false
    },
    mutations: {
        drawerChange: (state, bool) => {
            state.drawer = bool
        }
    },
    getters: {
        drawer: state => {
            return state.drawer;
        }
    }
}
