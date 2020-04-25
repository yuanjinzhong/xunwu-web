<template>
    <!--顶部工具栏-->
    <v-toolbar flat>
        <v-toolbar-title class="text-uppercase grey--text">
            <v-app-bar-nav-icon class="grey--text" @click="drawerChange()"/>
            <span class="font-weight-light ">XunWu</span>
            <span>Azhong</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        //顶部工具栏
        name: "toolBar",
        data() {
            return {}
        },
        methods: {
            drawerChange: function () {
                this.$store.commit('drawerChange', !this.$store.getters.drawer)
            }
        }
    }
</script>

<style scoped>

</style>
