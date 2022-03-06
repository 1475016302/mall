"use strict";(self["webpackChunksupermall1"]=self["webpackChunksupermall1"]||[]).push([[206],{6742:function(t,e,a){a.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return a("div",{key:r,staticClass:"tab-control-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[a("span",[t._v(t._s(e))])])})),0)},i=[],s={name:"TabControl",props:{titles:{type:Array,default(){return[]}}},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("tabClick",t)}}},n=s,c=a(1001),o=(0,c.Z)(n,r,i,!1,null,"ec096c3a",null),l=o.exports},8463:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("nav-bar",{staticClass:"nav-bar"},[a("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),a("div",{staticClass:"content"},[a("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),a("scroll",{attrs:{id:"tab-content",data:[t.categoryData]}},[a("div",[a("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),a("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),a("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)])],1)],1)},i=[],s=a(6180),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("scroll",{attrs:{id:"tab-menu"}},[a("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,r){return a("div",{key:r,staticClass:"menu-list-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},c=[],o=a(4966),l={name:"TabMenu",components:{Scroll:o.Z},props:{categories:Array},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("selectItem",t)}}},u=l,g=a(1001),d=(0,g.Z)(u,n,c,!1,null,"83469244",null),h=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.subcategories.list?a("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,r){return a("div",{key:r,staticClass:"item"},[a("a",{attrs:{href:e.link}},[a("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),a("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},y=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},f=[],b={name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){let t=this.$refs.gridView,e=t.children;t.style.padding=`${this.vMargin}px ${this.hMargin}px`;let a=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols;for(let r=0;r<e.length;r++){let t=e[r];t.style.width=a+"px",(r+1)%this.cols!==0&&(t.style.marginRight=this.itemSpace+"px"),r>=this.cols&&(t.style.marginTop=this.lineSpace+"px")}}}},C=b,v=(0,g.Z)(C,p,f,!1,null,"58a324f6",null),_=v.exports,x={name:"TabContentCategory",components:{GridView:_},props:{subcategories:{type:Object,default(){return[]}}}},D=x,k=(0,g.Z)(D,m,y,!1,null,"5a620859",null),I=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("grid-view",t._l(t.categoryDetail,(function(t,e){return a("goods-list-item",{key:e,attrs:{goodsItem:t}})})),1)},S=[],Z=a(1665),T={name:"TabContentDetail",components:{GridView:_,GoodsListItem:Z.Z},props:{categoryDetail:{type:Array,default(){return[]}}}},$=T,E=(0,g.Z)($,w,S,!1,null,"3970e21f",null),M=E.exports,N=a(6742),W=a(2924);function V(){return(0,W.W)({url:"/category"})}function A(t){return(0,W.W)({url:"/subcategory",params:{maitKey:t}})}function G(t,e){return(0,W.W)({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var L=a(6136),B=a(4126),K={name:"Category",components:{NavBar:s.Z,TabMenu:h,Scroll:o.Z,TabContentCategory:I,TabControl:N.Z,TabContentDetail:M},mixins:[B.Bt],data(){return{categories:[],categoryData:{},currentIndex:-1}},created(){this.getCategory()},computed:{showSubcategory(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{getCategory(){V().then((t=>{this.categories=t.data.category.list;for(let e=0;e<this.categories.length;e++)this.categoryData[e]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};this.getSubcategories(0)}))},getSubcategories(t){this.currentIndex=t;const e=this.categories[t].maitKey;A(e).then((e=>{this.categoryData[t].subcategories=e.data,this.categoryData={...this.categoryData},this.getCategoryDetail(L.p6),this.getCategoryDetail(L.uX),this.getCategoryDetail(L.AE)}))},getCategoryDetail(t){const e=this.categories[this.currentIndex].miniWallkey;G(e,t).then((e=>{this.categoryData[this.currentIndex].categoryDetail[t]=e,this.categoryData={...this.categoryData}}))},selectItem(t){this.getSubcategories(t)}}},j=K,O=(0,g.Z)(j,r,i,!1,null,"129d00f7",null),R=O.exports}}]);
//# sourceMappingURL=206.cedbee3c.js.map