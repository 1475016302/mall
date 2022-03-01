<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      // return this.$route.path == this.path
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      //判断是不是处于状态 若是设置color属性 如果不是返回空对象
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemClick() {
      // console.log('itemClick');
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    },
  },
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0 2px 0;
  vertical-align: middle;
}
/* .active {
  color: #ff5777;
} */
</style>