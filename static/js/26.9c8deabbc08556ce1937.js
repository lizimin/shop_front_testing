webpackJsonp([26],{"5IQf":function(e,n,a){n=e.exports=a("FZ+f")(!0),n.push([e.i,"\n.page-sale-paintrepair[data-v-27768fbd] {\n  background: #f3f3f3;\n}\n.page-sale-paintrepair .search-bar[data-v-27768fbd] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n}\n.page-sale-paintrepair .goods[data-v-27768fbd] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n.page-sale-paintrepair .goods .good-item[data-v-27768fbd] {\n  background: #fff;\n  margin-bottom: 0.1rem;\n}\n.page-sale-paintrepair .goods .good-item img[data-v-27768fbd] {\n  width: 100%;\n}\n.page-sale-paintrepair .goods .good-item .info[data-v-27768fbd] {\n  padding: 0.2rem 0.3rem;\n  line-height: 1.5;\n}\n.page-sale-paintrepair .goods .good-item .info-hd span[data-v-27768fbd] {\n  padding: 0 0.1rem 0 0;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-title[data-v-27768fbd] {\n  font-size: 0.36rem;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-mallprice[data-v-27768fbd] {\n  font-size: 0.32rem;\n  color: #f23030;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-marketprice[data-v-27768fbd] {\n  font-size: 0.32rem;\n  color: #959595;\n  text-decoration: line-through;\n}\n.page-sale-paintrepair .goods .good-item .info-bd[data-v-27768fbd] {\n  margin-top: 0.05rem;\n  font-size: 0.3rem;\n  color: #959595;\n}\n","",{version:3,sources:["E:/XAR/email_xarshop_source_code/data/www/wx_mall_my/src/view/vcard/paintRepair.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,aAAa;CACd;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,sBAAsB;CACvB;AACD;EACE,YAAY;CACb;AACD;EACE,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,8BAA8B;CAC/B;AACD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;CAChB",file:"paintRepair.vue",sourcesContent:["\n.page-sale-paintrepair[data-v-27768fbd] {\n  background: #f3f3f3;\n}\n.page-sale-paintrepair .search-bar[data-v-27768fbd] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n}\n.page-sale-paintrepair .goods[data-v-27768fbd] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n.page-sale-paintrepair .goods .good-item[data-v-27768fbd] {\n  background: #fff;\n  margin-bottom: 0.1rem;\n}\n.page-sale-paintrepair .goods .good-item img[data-v-27768fbd] {\n  width: 100%;\n}\n.page-sale-paintrepair .goods .good-item .info[data-v-27768fbd] {\n  padding: 0.2rem 0.3rem;\n  line-height: 1.5;\n}\n.page-sale-paintrepair .goods .good-item .info-hd span[data-v-27768fbd] {\n  padding: 0 0.1rem 0 0;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-title[data-v-27768fbd] {\n  font-size: 0.36rem;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-mallprice[data-v-27768fbd] {\n  font-size: 0.32rem;\n  color: #f23030;\n}\n.page-sale-paintrepair .goods .good-item .info-hd-marketprice[data-v-27768fbd] {\n  font-size: 0.32rem;\n  color: #959595;\n  text-decoration: line-through;\n}\n.page-sale-paintrepair .goods .good-item .info-bd[data-v-27768fbd] {\n  margin-top: 0.05rem;\n  font-size: 0.3rem;\n  color: #959595;\n}\n"],sourceRoot:""}])},ZFFn:function(e,n,a){var t=a("5IQf");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("rjj0")("fa014c12",t,!0)},eliv:function(e,n,a){"use strict";function t(e){a("ZFFn")}Object.defineProperty(n,"__esModule",{value:!0});var i=a("Xxa5"),o=a.n(i),s=a("exGp"),r=a.n(s),d=a("GQaK"),l=a("P9l9"),c=a("Tr0N"),p=a("N580"),f={name:"saleList",components:{searchBar:p.a,Search:c.a},data:function(){return{goodsList:[],listHeight:[],scrollY:0,conHeight:0}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"],this.init()},mounted:function(){var e=document.getElementsByTagName("body");console.log(e[0].clientHeight),this.conHeight=e[0].clientHeight-95},methods:{init:function(){var e=this;return r()(o.a.mark(function n(){var a,t,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e,n.next=3,l.a.getRecommendGoodsList();case 3:t=n.sent,i=t.data.list,a.goodsList=t.data.list,e.$nextTick(function(){e._initScroll(),e._calculateHeight()});case 7:case"end":return n.stop()}},n,e)}))()},_initScroll:function(){this.meunScroll=new d.a(this.$refs.goodWrapper,{click:!0})},selectGood:function(e,n){var a=this,t=e.sku_code;e.goods_name;e.goods_redirect_type,a.$router.push("/goods/"+e.pro_id+"?code="+t)},_calculateHeight:function(){var e=this.$refs.goodList,n=0;this.listHeight.push(n);for(var a=0;a<e.length;a++){n+=e[a].clientHeight,this.listHeight.push(n)}},selectSecCat:function(e){var n=this;console.log(e);var a=e;n.s_index=e,n.currentFistCat=a},_followScroll:function(e){var n=this.$refs.goodList,a=n[e];this.meunScroll.scrollToElement(a,300,0,-100)}},computed:{currentIndex:function(){for(var e=0;e<this.listHeight.length;e++){var n=this.listHeight[e],a=this.listHeight[e+1];if(!a||this.scrollY>=n&&this.scrollY<a)return this._followScroll(e),e}return 0}}},g=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("keep-alive",[a("div",{staticClass:"page-sale-paintrepair go-back-top"},[a("div",{staticClass:"search-bar"},[a("search-bar")],1),e._v(" "),a("div",{staticClass:"goods",style:{height:e.conHeight+"px"}},[a("div",{ref:"goodWrapper",staticClass:"good-wrapper"},[a("ul",{staticClass:"go-back-top"},[e._l(e.goodsList,function(n,t){return a("li",{ref:"goodList",refInFor:!0,staticClass:"good-item",class:{current:e.currentIndex===t},on:{click:function(a){e.selectGood(n,a)}}},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:n.photo,alt:""}})]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"info-hd"},[a("span",{staticClass:"info-hd-title"},[e._v("\n                 "+e._s(n.goods_name)+"\n               ")]),e._v(" "),a("span",{staticClass:"info-hd-mallprice"},[e._v("\n                 ￥"+e._s(n.mall_price)+"\n                 ")]),e._v(" "),a("span",{staticClass:"info-hd-marketprice"},[e._v("\n                 ￥"+e._s(n.market_price)+"\n                 ")])]),e._v(" "),a("div",{staticClass:"info-bd"},[e._v("\n               "+e._s(n.detail_des)+"\n\n               ")])])])}),e._v(" "),a("common-bottom")],2)])])])])},A=[],m={render:g,staticRenderFns:A},h=m,u=a("VU/8"),C=t,v=u(f,h,!1,C,"data-v-27768fbd",null);n.default=v.exports}});