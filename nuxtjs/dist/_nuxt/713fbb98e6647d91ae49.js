(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{202:function(t,e,n){var content=n(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("46eb378e",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";var o=n(202);n.n(o).a},255:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".rpad{padding:20px}.item img{width:100%}@media only screen and (min-width:415px){.item{width:300px;float:left;margin:10px}}@media only screen and (max-width:414px){.item{width:calc(100% - 20px);float:left;margin:10px}}",""])},274:function(t,e,n){"use strict";n.r(e);var o=n(73),d=n.n(o),r={data:function(){return{loading:!1,data:{},uuid:{weddings:"e0d0d8fd-69d4-11e9-8b4a-88b111167862",meetings:"0b66c5e1-69d7-11e9-8b4a-88b111167862","coorporate-functions":"1fc2da5a-69d7-11e9-8b4a-88b111167862",reunions:"32af73c9-69d7-11e9-8b4a-88b111167862","special-events":"3efd36c0-69d7-11e9-8b4a-88b111167862",birthdays:"f89e1969-69d6-11e9-8b4a-88b111167862"},selector:".viewer",options:{columnWidth:".grid-sizer",percentPosition:!0,gutter:0,itemSelector:".item"}}},methods:{loadData:function(){var t=this;this.loading=!0,d.a.get(this.$store.state.apiPath+"/api/feature/"+this.uuid[this.$route.params.id]).then(function(e){t.data=e.data,t.loading=!1,t.loaded()}).catch(function(e){console.log(e),t.loading=!1})}},mounted:function(){this.loadData()}},c=(n(254),n(20)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-flex",{staticClass:"rpad",attrs:{xs12:""}},[t._v(t._s(t.data.body))]),t._v(" "),t._l(t.data.images,function(img,i){return n("div",{key:i,staticClass:"item"},[n("img",{staticClass:"work-thumb",attrs:{src:t.$store.state.apiPath+img}})])})],2)},[],!1,null,null,null);e.default=component.exports}}]);