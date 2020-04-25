<template>
    <!--所有应用程序都需要v-app
    v-app应该在您的应用程序中仅使用一次-->
    <v-app class="grey lighten-4 ">
        <!--登陆页面不渲染导航栏-->
        <NavBar v-show="$route.name!=='login'"/>
        <v-content>
            <!--路由过渡动效-->
            <transition>
                <router-view/>
            </transition>
        </v-content>
        <!--登陆页面不渲染footer-->
        <Foot v-show="$route.name!=='login'"/>
    </v-app>
</template>

<script>
    import NavBar from '@/views/navbar'
    import Foot from "@/components/layout/foot";

    export default {
        components: {Foot, NavBar},
        data: () => ({})

    }
</script>

