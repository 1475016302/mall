<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 选项卡 -->
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tab-control>
    <!-- better-scroll滚动scroll -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 轮播图homeswiper -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <!-- 商品推荐 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行 -->
      <popular-view></popular-view>
      <!-- 选项卡 -->
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- backtop不需要一起滚 -->
    <!-- 组件不能直接@click 需要加.navtive修饰符 修饰组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import PopularView from './childComps/popularView';

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';

import { getHomeMultidata, getHomeGoods } from 'network/home';
import { debounce } from 'common/utils';
import { itemListenerMixin } from 'common/mixin';

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    PopularView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListenerMixin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    // //监听item图片加载完成
    // //对监听的事件进行保存
    // this.itemImgListener = () => {
    //   refresh();
    // };
    // this.$bus.$on('imageItemLoad', this.itemImgListener);
    // 获取tabControl的offsetTop
    // 组件没有offsetTop-> 所有的组件都有一个属性$el:用于获取组件中的元素
    // console.log(this.$refs.tabControl.$el.offsetTop);
    // 在这里获取不准，可能图片还没加载完，在轮播图加载完再获取
  },
  activated() {
    // 最好刷新一下 以防出现不能滚动的bug
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 1. 保存离开home时的位置
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);

    // 2.取消全局事件的监听，这里的第二个参数(on对应的第二个参数)必须要传，不然这个全局事件全部取消
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
  methods: {
    /* 
     事件监听相关的方法 
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      // 使两个选项卡同步
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 点击backtop回到顶部
    backClick() {
      // console.log('backClick');
      //第一个scroll是子组件的ref="scroll"可以获取到这个子组件 第二个scroll是子组件data里的scroll
      //第三个参数是毫秒
      this.$refs.scroll.scrollTo(0, 0, 500);
      // 上面这样写可能有点难看懂，再去Scroll.vue里面做封装
      // this.$refs.scroll.scrollTo(0, 0);
    },
    // 监听滚动
    contentScroll(position) {
      // 1.判断BackTop是否显示
      // console.log(position);
      // position.y是负的
      this.isShowBackTop = Math.abs(position.y) > 1000;
      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      // console.log('加载更多');
      this.getHomeGoods(this.currentType);
    },
    // 轮播图加载完成
    swiperImageLoad() {
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /* 
    网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //对于已经存在的属性和方法，用.和用[]得到的结果一致
      //对于不存在(未定义)的属性和方法，用.会创建这个新的属性或方法，而用[]的方式访问不会创建新的属性或方法
      //[]里面可以传变量、参数、表达式，而.后面只能跟一个固定的属性
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        // 还要再把goods里面的page=1，不然page还是0,上面的page只是一个变量
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* 设置padding视口就没有100vh了 */
  /* padding-top: 44px; */
  /* vh 视口 100vh->100%视口 50vh->50%视口 */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99; */
}
.tab-control {
  /* relative 就可以让z-index起效果 */
  position: relative;
  z-index: 9;
}
/* bs滚动方案2 定位 */
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}

/* bs方案1 动态计算 */
/*  navbar44+tabbar49=93  */
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
