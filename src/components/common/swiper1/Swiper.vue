<template>
  <div class="swiper">
    <!-- 显示轮播图片区域 -->
    <div
      class="slide"
      @touchstart="touchstart"
      @touchend="touchend"
      @touchmove="touchmove"
    >
      <slot></slot>
    </div>

    <!-- 小圆点显示区 -->
    <div>
      <ul class="indicator" v-if="showIndicator && slideNum > 1">
        <li
          v-for="(item, i) in slideNum"
          :key="i"
          :class="{ active: i === currentIndex - 1 }"
          class="indi-item"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    /* 播放图片的间隔时间 */
    interval: {
      type: Number,
      default: 3000,
    },
    /** 设置一个比例，当手指拖动的距离到达图片的几分之一是，图片被移动 */
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    /** 动画持续时间 */
    animDuration: {
      type: Number,
      default: 300,
    },
    /** 是否显示小圆点 */
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideNum: 0, // 图片个数
      currentIndex: 1, // 当前播放图片的index
      totalWidth: 0, // 轮播图的总宽度
      timer: null, // 定时器
      slideStyle: {}, // 存储slide的样式
      scrolling: false, // 图片是否在滑动
    };
  },
  mounted() {
    // 在mounted中调用以下两个函数，是因为mounted是Vue实例创建期间的最后一个声明周期函数
    // mounted执行时在内存中编译好的模板已经真实挂载到页面中,用户可以看到渲染好的页面
    // 此时也可以进行dom操作而不会报错了
    // 1.操作DOM, 在前后添加Slide
      setTimeout(() => {
        this.handleDom();
        // 2.开启定时器
        this.startTimer();
      }, 200)
  },
  methods: {
    /*
      通过设置定时器让图片自动播放
    */
    startTimer: function () {
      this.timer = window.setInterval(() => {
        // 通过定时器不断的循环改变currentIndex来使图片自动向左移动
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },

    /*
      清除定时器
    */
    stopTimer: function () {
      window.clearInterval(this.timer);
    },

     /**
       * 滚动到正确的位置
       */
      scrollContent: function (currentPosition) {
        // 0.设置正在滚动
        this.scrolling = true;

        // 1.开始滚动动画
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);

        // 2.判断滚动到的位置
        this.checkPosition();

        // 4.滚动完成
        this.scrolling = false
      },

      /**
       * 校验正确的位置
       */
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex-1);
        }, this.animDuration)
      },

      /**
       * 设置滚动的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

    /**
     * 操作dom
     */
    handleDom: function () {
      // 根据要求跟第一张图片复制一张放到最后
      // 将最后一张图片复制一张放到第一张前面

      // 获取要操作的元素
      let swiperEl = document.querySelector(".slide");
      let swiperitems = swiperEl.getElementsByClassName("swiperitem");
      // 保存图片个数
      this.slideNum = swiperitems.length;
      // 当图片张数>1的时候才好复制
      if (this.slideNum > 1) {
        //复制图片
        let firstClone = swiperitems[0].cloneNode(true);
        let lastClone = swiperitems[this.slideNum - 1].cloneNode(true);
        // 将复制的图片插入到想要的位置
        swiperEl.insertBefore(lastClone, swiperitems[0]);
        swiperEl.appendChild(firstClone);

        // 轮播区域的宽度
        this.totalWidth = swiperEl.offsetWidth;
        this.slideStyle = swiperEl.style;
      }
      // 让轮播图显示没复制图片时的第一张，现在显示的是复制过来的最后一张
      // 复制后，第一张图片的后面就是我们想要显示的，加上totalWidth表示的就是一张图片的宽度
      // 所以直接向左移动-this.totalWidth的距离
      this.animate(-this.totalWidth);

      // 监听屏幕宽度变化
      // 因为onresize在监听过程中会多次触发，所以使用一个定时器
      var firstTimer = null;
      window.onresize = () => {
        if (firstTimer) {
          clearTimeout(firstTimer);
        }
        firstTimer = setTimeout(() => {
          // 当监听到屏幕宽度发生变化时，改变this.totalWidth
          this.totalWidth = swiperEl.offsetWidth;
          this.animate(-this.totalWidth);
          this.currentIndex = 1;
        }, 300);
      };
    },

    /**
     * 实现动画函数
     */
    animate: function (target) {
      // 通过transform来设置移动距离
      this.slideStyle.transform = `translate3d(${target}px, 0, 0)`;
      this.slideStyle["-webkit-transform"] = `translate3d(${target}px), 0, 0`;
      this.slideStyle["-ms-transform"] = `translate3d(${target}px), 0, 0`;
    },

    /**
     * 调整动画
     */
    checkPosition: function () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        // 这里将this.slideStyle.transition 重新归零，这样待会重定位的时候就不会缓慢移动，显示出重定向的过程
        this.slideStyle.transition = "0ms";
        if (this.currentIndex >= this.slideNum + 1) {
          // 当轮播到最后最后一张图片时，再重新定位到第一张开始播放
          // 这里的第一张不是索引值为0的第一张，是我们图片要求摆放在第一个的
          this.currentIndex = 1;
          // 下标值为0的图片和下标值为5的图片是我们前面复制的，分别跟下标值为4和下标值为1的图片重复
          // 下标值为5的图片作为过渡图片，一播放到他就应该立马跳转到下标值为1的图片开始播放
          // 在重定向index后，如果不调用一下animate函数，那么轮播图就会直接从下标值为5的图片跳转到下标值为2的那张
          // 这是因为这里改变了currentIndex但是没有使用，当checkPosition()运行完一次，再循环timer定时器调用scrollContent函数时
          // currentIndex的值为2,跳过了播放下标值为1的那张图片直接到他的下一张，中间没有过渡导致用户能看到转换的过程，用户体验较差
          this.animate(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideNum;
          this.animate(-this.currentIndex * this.totalWidth);
        }
      }, this.animDuration);
    },
    scrollContent: function (position) {
      // 1.设置图片正在滑动
      this.scrolling = true;
      this.slideStyle.transition = "transform " + this.animDuration + "ms";
      // 3. 播放动画
      this.animate(position);
      // 2. 判断currentIndex的值是否符合要求
      this.checkPosition();
      // 4.图片滑动结束
      this.scrolling = false;
    },

    // 设置touch事件
    /**
     * 手指触摸到一个 DOM 元素时触发
     */
    touchstart: function (e) {
      // 1.判断此时图片是否在滑动，图片在滑动的话不能进行操作
      if (this.scrolling) return;
      // 2. 图片在滑动的话就停止定时器
      this.stopTimer();
      // 3.记录手指刚触摸屏幕时的位置
      this.startX = e.touches[0].pageX;
    },

    /**
     * 手指在一个 DOM 元素上滑动时触发
     */
    touchmove: function (e) {
      // 记录手指在屏幕是上移动后的位置
      this.currentX = e.touches[0].pageX;
      // 计算出移动的距离
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      this.animate(moveDistance);
      this.scrolling = true;
    },

    /**
     * 手指从一个 DOM 元素上移开时触发
     */
    touchend: function () {
      // 在手指拖动图片后在进行计算
      // 解决了不断触摸屏幕图片一直播放的问题
      if (this.scrolling) {
        // 获取移动的距离
        let currentMove = Math.abs(this.distance);
        if (this.distance === 0) {
          return;
        } else if (
          this.distance > 0 &&
          currentMove > this.totalWidth * this.moveRatio
        ) {
          // 当图片被向右拖动时，currentIndex--，显示前一张图片
          this.currentIndex--;
        } else if (
          this.distance < 0 &&
          currentMove > this.totalWidth * this.moveRatio
        ) {
          // 当图片被向左拖动时，currentIndex++，显示后一张图片
          this.currentIndex++;
        }
      }
      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 4.移动完成后重新开启定时器
      this.startTimer();
    },
  },
};
</script> 
<style scoped>
.swiper {
  overflow: hidden;
  position: relative;
}
.slide {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
