
import { debounce } from './utils';
import { POP, NEW, SELL } from "./const";
import BackTop from 'components/content/backTop/BackTop';


export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null, // 全局事件监听的保存
      refresh: null
    }
  },
  mounted () {
    // 监听item中的图片加载完成
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    //对监听的事件进行保存
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on('imageItemLoad', this.itemImgListener);
    // console.log('我是混入的内容');
  }
}

//backTop的混入
export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 点击backtop回到顶部
    backClick () {
      // console.log('backClick');
      //第一个scroll是子组件的ref="scroll"可以获取到这个子组件 第二个scroll是子组件data里的scroll
      //第三个参数是毫秒
      this.$refs.scroll.scrollTo(0, 0, 500);
      // 上面这样写可能有点难看懂，再去Scroll.vue里面做封装
      // this.$refs.scroll.scrollTo(0, 0);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
}
