(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{269:function(t,a,i){"use strict";i.r(a);var s=i(67),e=i.n(s),n={data:function(){return{loading:!1,data:{}}},methods:{loadData:function(){var t=this;this.loading=!0,e.a.get(this.$store.state.apiPath+"/api/about_bali/2226c7b7-610a-11e9-82c7-88b111167862").then(function(a){t.data=a.data,t.loading=!1}).catch(function(a){console.log(a),t.loading=!1})}},mounted:function(){this.loadData()}},o=i(17),l=Object(o.a)(n,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-flex",{attrs:{xs12:""}},[i("v-parallax",{staticClass:"overlayed",attrs:{src:"/assets/images/slide2.jpg",height:"250"}},[i("div",{staticClass:"middle text-xs-center px-3"},[i("p",{staticClass:"font-weight-light display-1"},[t._v("ABOUT UBUD, BALI")]),t._v(" "),i("p",{staticClass:"font-weight-medium subheading"},[t._v("For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22")])])]),t._v(" "),i("v-layout",{staticStyle:{"max-width":"1280px",margin:"auto"},attrs:{row:"",wrap:"","font-weight-light":""}},[i("v-flex",{attrs:{xs12:"",md7:"","py-5":"","px-4":""},domProps:{innerHTML:t._s(t.data.body1)}}),t._v(" "),i("v-flex",{attrs:{xs12:"",md5:"","py-5":"","px-4":""},domProps:{innerHTML:t._s(t.data.body2)}})],1)],1)},[],!1,null,null,null);l.options.__file="about-bali.vue";a.default=l.exports}}]);