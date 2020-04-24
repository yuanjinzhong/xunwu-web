<template>
  <div class="box">
    <div class="topBar">
      <ul class="location">
        <locationDropDown />
      </ul>
      <ul class="detail">
        <li v-for="(item, index) in navItems" :key="index">
          <Button @click="click(item)"> {{ item.name }}</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import locationDropDown from "./header/LocationDropDown";

export default {
  data() {
    return {
      navItems: [
        { name: "我的订单" },
        { name: "我的寻屋" },
        { name: "寻屋会员" },
        { name: "收藏夹" },
        { name: "登陆" },
        { name: "注册" },
        { name: "购物车" }
      ],
      cartStatus: false
    };
  },
  components: { locationDropDown },
  methods: {
    click(item) {
      if (item.name === "登陆") {
        this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style scoped>
.box {
  height: 2.2rem;
  background-color: #e3e4e5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topBar {
  margin: 0% auto; /*水平居中*/
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.detail {
  display: flex;
  width: 45%;
  justify-content: space-evenly;
  align-items: center;
}

.location {
  padding: 10px 0;
}
</style>
