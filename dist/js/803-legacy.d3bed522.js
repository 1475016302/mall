(self["webpackChunksupermall1"]=self["webpackChunksupermall1"]||[]).push([[803],{4371:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return s("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},n=[],o=s(1665),a={components:{GoodsListItem:o.Z},name:"GoodsList",props:{goods:{type:Array,default:function(){return[]}}}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"576a8b85",null),d=l.exports},389:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return It}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("ul",t._l(t.$store.state.carList,(function(e,i){return s("li",{key:i},[t._v(t._s(e))])})),0),s("detail-swiper",{attrs:{topImages:t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:function(e){return t.imageLoad()}}}),s("detail-param-info",{ref:"param",attrs:{paramInfo:t.goodsParam}}),s("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},n=[],o=s(4367),a=(s(9653),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s(228),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"title-item",class:{active:t.currentIndex===s},on:{click:function(e){return t.itemClick(s)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)}),r=[],c=s(6180),l={name:"DetailNavBar",components:{NavBar:c.Z},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},d=l,u=s(1001),f=(0,u.Z)(d,a,r,!1,null,"41d10894",null),h=f.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)},p=[],v=s(9381),g={name:"DetailSwiper",components:{Swiper:v.k,SwiperItem:v.t},props:{topImages:{type:Array,default:function(){}}}},_=g,C=(0,u.Z)(_,m,p,!1,null,"46fefb8e",null),I=C.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!=Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon?t.goods.services[e-1].icon:t.goods.services[e].icon,alt:""}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},b=[],w={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},k=w,x=(0,u.Z)(k,y,b,!1,null,"3404b540",null),T=x.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],O=(s(6977),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),P=O,S=(0,u.Z)(P,$,D,!1,null,"74879836",null),j=S.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},Z=[],B={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},L=B,W=(0,u.Z)(L,E,Z,!1,null,"383a599f",null),N=W.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],X={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},G=X,z=(0,u.Z)(G,Y,M,!1,null,"64e8b576",null),A=z.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],q=s(2815),U={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return(0,q.p)(e,"yyyy-MM-dd hh:mm")}}},V=U,H=(0,u.Z)(V,F,R,!1,null,"59478344",null),J=H.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],tt={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},et=tt,st=(0,u.Z)(et,K,Q,!1,null,"3599faca",null),it=st.exports,nt=s(4966),ot=s(4371);function at(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function rt(t,e,s){return e&&at(t.prototype,e),s&&at(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}s(1703);function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s(8309);var lt=s(2924);function dt(t){return(0,lt.W)({url:"/detail",params:{iid:t}})}function ut(){return(0,lt.W)({url:"/recommend"})}var ft=rt((function t(e,s,i){ct(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice})),ht=rt((function t(e){ct(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods})),mt=rt((function t(e,s){ct(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables})),pt=s(4126),vt=s(4665),gt={name:"Detail",components:{DetailNavBar:h,DetailSwiper:I,DetailBaseInfo:T,DetailShopInfo:j,Scroll:nt.Z,DetailGoodsInfo:N,DetailParamInfo:A,DetailCommentInfo:J,GoodsList:ot.Z,DetailBottomBar:it},mixins:[pt.xp,pt.s6],data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},goodsParam:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopY:null,currentIndex:0}},created:function(){var t=this;this.iid=this.$route.query.iid,dt(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new ft(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new ht(s.shopInfo),t.detailInfo=s.detailInfo,t.goodsParam=new mt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),ut().then((function(e){t.recommends=e.data.list}))},methods:(0,o.Z)((0,o.Z)({},(0,vt.nv)(["addCart"])),{},{imageLoad:function(){this.refresh(),this.themeTopYs=[],this.themeTopYs.push(0),this.themeTopYs.push(this.$refs.param.$el.offsetTop),this.themeTopYs.push(this.$refs.comment.$el.offsetTop||this.$refs.recommend.$el.offsetTop),this.themeTopYs.push(this.$refs.recommend.$el.offsetTop),this.themeTopYs.push(Number.MAX_VALUE)},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],200)},contentScroll:function(t){for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.isShowBackTop=Math.abs(t.y)>1e3},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.addCart(e).then((function(e){t.$toast.show()}))}}),mounted:function(){},destroyed:function(){this.$bus.$off("imageItemLoad",this.itemImgListener)}},_t=gt,Ct=(0,u.Z)(_t,i,n,!1,null,"9b6c7e96",null),It=Ct.exports},9337:function(t,e,s){var i=s(2109),n=s(9781),o=s(3887),a=s(5656),r=s(1236),c=s(6135);i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,s,i=a(t),n=r.f,l=o(i),d={},u=0;while(l.length>u)s=n(i,e=l[u++]),void 0!==s&&c(d,e,s);return d}})},9381:function(t,e,s){"use strict";s.d(e,{k:function(){return l},t:function(){return p}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"hy-swiper"}},[s("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),s("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(e,i){return s("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))})):t._e()],2)],2)},n=[],o=(s(9653),{name:"Swiper",props:{interval:{type:Number,default:3e3},moveRatio:{type:Number,default:.25},animDuration:{type:Number,default:300},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),200)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=this,e=document.querySelector(".swiper"),s=e.getElementsByClassName("slide");if(this.slideCount=s.length,this.slideCount>1){var i=s[0].cloneNode(!0),n=s[this.slideCount-1].cloneNode(!0);e.insertBefore(n,s[0]),e.appendChild(i),this.totalWidth=e.offsetWidth,this.swiperStyle=e.style}this.setTransform(-this.totalWidth);var o=null;window.onresize=function(){o&&clearTimeout(o),o=setTimeout((function(){t.totalWidth=e.offsetWidth,t.setTransform(-t.totalWidth),t.currentIndex=1}),300)}},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,s=this.distance+e;this.setTransform(s),this.scrolling=!0},touchEnd:function(){if(this.scrolling){var t=Math.abs(this.distance);if(0===this.distance)return;this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++}this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=o,r=s(1001),c=(0,r.Z)(a,i,n,!1,null,"40138f5c",null),l=c.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide"},[t._t("default")],2)},u=[],f={name:"Slide"},h=f,m=(0,r.Z)(h,d,u,!1,null,"376fae32",null),p=m.exports},228:function(t,e,s){"use strict";t.exports=s.p+"img/back.ca421e22.svg"},4367:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});s(7941),s(2526),s(7327),s(1539),s(5003),s(4747),s(9337);var i=s(3796);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){(0,i.Z)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}}}]);
//# sourceMappingURL=803-legacy.d3bed522.js.map