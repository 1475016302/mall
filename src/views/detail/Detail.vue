<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <ul>
        <li v-for="(item,index) in $store.state.carList" :key="index">{{item}}</li>
      </ul>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad()"></detail-goods-info>
      <detail-param-info :paramInfo="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- backtop不需要一起滚 -->
    <!-- 组件不能直接@click 需要加.navtive修饰符 修饰组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';

import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList';

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from 'network/detail';
import { itemListenerMixin, backTopMixin } from 'common/mixin';
import { debounce } from 'common/utils';

import { mapActions } from 'vuex'


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data () {
    return {
      iid: null,
      topImages: [], // 轮播图
      goods: {}, // 商品基本信息
      shop: {}, // 店铺
      detailInfo: {}, //商品详情
      goodsParam: {}, // 商品参数
      commentInfo: {}, // 评论信息
      recommends: [], // 推荐
      themeTopYs: [], //标题内容对应的y值
      getThemeTopY: null, //防抖
      currentIndex: 0 // 当前滚动到第几个主题
    };
  },
  created () {
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

      //6.获取评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      //1.第一次获取，不能获取到值
      //原因：this.$refs.param.$el还没有渲染
      // this.themeTopYs = []; //先清空，不然不止4个值
      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);

      //2.第二次获取：值不对
      // this.$nextTick(() => {
      //   //值不对的原因：图片没有计算在内
      //   //根据最新的数据，对应的DOM已经被渲染出来
      //   //但是图片依然是没有加载完(目前获取到offsetTop不包括其中的图片)
      //   //offsetTop值不对的时候，都是因为图片的问题
      //   this.themeTopYs = []; //先清空，不然不止4个值
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // });
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    // 4.给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖)
    // this.getThemeTopY = debounce(() => {
    //   this.themeTopYs = []; //先清空，不然不止4个值
    //   this.themeTopYs.push(0);
    //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    //   this.themeTopYs.push(Number.MAX_VALUE); // js里面number的最大值

    //   console.log(this.themeTopYs);
    // }, 100);
  },

  methods: {
    ...mapActions(['addCart']),
    imageLoad () {
      // this.$refs.scroll.refresh();
      this.refresh();

      //这种方法也可
      this.themeTopYs = []; //先清空，不然不止4个值
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //解决没有评论的情况
      this.themeTopYs.push(
        this.$refs.comment.$el.offsetTop || this.$refs.recommend.$el.offsetTop
      );
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      this.themeTopYs.push(Number.MAX_VALUE); // js里面number的最大值

      // console.log(this.themeTopYs);

      // 获取4个主题的offsetTop
      // this.getThemeTopY();
    },

    // 点击标题，滚动到对应内容
    titleClick (index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },

    // 监听滚动
    contentScroll (position) {
      // 1.获取y值
      const positionY = -position.y;
      //2.positionY和主题中值进行对比
      // [0，7938，9120，9452]

      // positionY 在 0 和 7938 之间，index=0
      // positionY 在 7938 和 9120 之间，index=1
      // positionY 在 9120 和 9452 之间，index=2

      // positionY 大于等于 9452值，index=3
      let length = this.themeTopYs.length;
      // **法一 普通做法
      // for (let i = 0; i < length; i++) {
      //   // console.log(i);
      //   if (
      //     this.currentIndex !== i &&
      //     ((i < length - 1 &&
      //       positionY >= this.themeTopYs[i] &&
      //       positionY < this.themeTopYs[i + 1]) ||
      //       (i === length - 1 && positionY >= this.themeTopYs[i]))
      //   ) {
      //     this.currentIndex = i;
      //     // console.log(this.currentIndex);
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //   }
      // }

      // **法二 hack做法，引入一个最大值与最后一个值进行比较
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 3.判断BackTop是否显示
      // console.log(position);
      // position.y是负的
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },

    // 加入购物车
    addToCart () {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车里面(1.Promise 2.mapActions)
      // this.$store.commit('addCart', product);
      this.addCart(product).then(res => {
        // this.$toast.show(res, 2000)
        this.$toast.show();
        // console.log(this.$toast);
      })
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // });
    }
  },
  mounted () {
    // console.log('detailmixnin');
  },
  // updated() {
  //   this.themeTopYs = [];
  //   this.themeTopYs.push(0);
  //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
  //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
  //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
  //   console.log(this.themeTopYs);
  // },
  destroyed () {
    this.$bus.$off('imageItemLoad', this.itemImgListener);
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  /* 鼠标不能滚动 */
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

/* 给一个固定的高度 */
.content {
  height: calc(100% - 44px - 49px);
}
</style>