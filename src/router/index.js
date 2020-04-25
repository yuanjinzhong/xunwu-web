import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        //路由懒加载, 注释/* webpackChunkName: "login" */ 是由必要的
        component: () => import(/* webpackChunkName: "login" */'@/views/login.vue')
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import(/* webpackChunkName: "signIn" */'@/components/login/signIn.vue')
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: () => import(/* webpackChunkName: "signUp" */'@/components/login/signUp.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
