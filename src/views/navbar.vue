<template>
    <nav>
        <!--顶部工具栏-->
        <tool-bar/>
        <!--侧边导航抽屉-->
        <nav-drawer/>
    </nav>
</template>

<script>
    import NavDrawer from "@/components/layout/navDrawer";
    import ToolBar from "@/components/layout/toolBar";

    export default {
        name: "navBar",
        components: {
            ToolBar,
            NavDrawer,
        },
    }
</script>

<style scoped>

</style>
