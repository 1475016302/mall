<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad()"></detail-goods-info>
      <detail-param-info :paramInfo="goodsParam"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [], // 轮播图
      goods: {}, // 商品基本信息
      shop: {}, // 店铺
      detailInfo: {},
      goodsParam: {}, // 商品参数
      commentInfo: {}, // 评论
      recommends: [], // 推荐
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.query.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

/* 给一个固定的高度 */
.content {
  height: calc(100% - 44px);
}
</style>