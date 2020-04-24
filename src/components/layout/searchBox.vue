<template>
  <div class="search-div">
    <el-input
      placeholder="请输入区域、板块或小区名开始找房"
      icon="search"
      v-model="keyword"
      class="search-input"
    />
    <!-- 向父组件发送search(事件名字随意，只要和父组件监听的一样) 事件-->
    <el-button type="primary" v-on:click="$emit('search')">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "searchbox",
  data() {
    return {
      keyword: "汤臣一品"
    };
  },
  methods: {}
};
</script>

<style scoped>
.search-input {
  width: 30rem;
  margin-top: 103px;
}
.search-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
