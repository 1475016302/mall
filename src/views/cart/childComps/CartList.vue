<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <CartListItem v-for="(item,index) in  cartList" :key="index" :itemInfo="item"></CartListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';

import { mapGetters } from 'vuex';
import CartListItem from './CartListItem.vue';
export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>