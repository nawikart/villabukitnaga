(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{273:function(t,e,n){"use strict";n.r(e);var o=n(73),l=n.n(o),d={data:function(){return{loading:!1,data:{}}},methods:{loadData:function(){var t=this;this.loading=!0,l.a.get(this.$store.state.apiPath+"/api/about_bali/2226c7b7-610a-11e9-82c7-88b111167862").then(function(e){t.data=e.data,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})}},mounted:function(){this.loadData()}},r=n(20),component=Object(r.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:""}},[n("v-parallax",{staticClass:"overlayed",attrs:{src:"/assets/images/slide2.jpg",height:"250"}},[n("div",{staticClass:"middle text-xs-center px-3"},[n("p",{staticClass:"font-weight-light display-1"},[t._v("ABOUT UBUD, BALI")]),t._v(" "),n("p",{staticClass:"font-weight-medium subheading"},[t._v("For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22")])])]),t._v(" "),n("v-layout",{staticStyle:{"max-width":"1280px",margin:"auto"},attrs:{row:"",wrap:"","font-weight-light":""}},[n("v-flex",{attrs:{xs12:"",md7:"","py-5":"","px-4":""},domProps:{innerHTML:t._s(t.data.body1)}}),t._v(" "),n("v-flex",{attrs:{xs12:"",md5:"","py-5":"","px-4":""},domProps:{innerHTML:t._s(t.data.body2)}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);