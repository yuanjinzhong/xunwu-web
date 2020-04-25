<template>
    <!--侧边栏导航抽屉-->
    <v-navigation-drawer v-model="getDrawer"
                         absolute
                         bottom
                         :expand-on-hover="true">

        <!--此处可以循环遍历权限菜单-->
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            寻屋
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            xunwu
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>


                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        //导航抽屉
        name: "navDrawer",
        data() {
            return {
                group: "",
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                    {title: 'Photos', icon: 'mdi-image'},
                    {title: 'About', icon: 'mdi-help-box'},
                ]
            }
        },
        //vuex里面属性的更新必须使用计算属性,计算属性是响应式的
        computed: {
            getDrawer() {
                return this.$store.getters.drawer
            }
        }
    }
</script>

<style scoped>

</style>
