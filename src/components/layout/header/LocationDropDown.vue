<template>
  <Dropdown placement="bottom-start">
    <a href="javascript:void(0)">
      <Icon type="ios-pin" class="icon" />
      {{ currentCity }}
    </a>
    <DropdownMenu slot="list">
      <dropdown-item v-for="(items, index) in cityArr" :key="index">
        <span
          v-for="(item, index) in items"
          class="city-item"
          :key="index"
          @click="changeCity(item)"
        >
          {{ item }}
        </span>
      </dropdown-item>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: "MyDropDown",
  data() {
    return {
      currentCity: "上海",
      cityArr: [
        ["无锡", "苏州", "常州", "镇江"],
        ["泰州", "扬州", "南通", "盐城"],
        ["宿迁,", "徐州", "连云港", "南京"],
        ["淮安"]
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  color: #d9534f;
}

a:hover {
  color: #d9534f;
}

.city-item:hover {
  color: #d9534f;
}
</style>
