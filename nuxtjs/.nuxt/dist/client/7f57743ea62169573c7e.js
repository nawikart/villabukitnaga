(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{185:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1bedfd07",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var r=n(185);n.n(r).a},221:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,"#press{max-width:1200px;margin:0 auto}@media only screen and (min-width:1025px){#press .item:first-child,#press .item:nth-child(2){border-bottom:1px solid #fff}#press .item:nth-child(2){border-left:1px solid #fff;border-right:1px solid #fff}#press .item:nth-child(3){border-bottom:1px solid #fff}#press .item:nth-child(5){border-left:1px solid #fff;border-right:1px solid #fff}}@media only screen and (min-width:601px){#press .item{padding:30px}}@media only screen and (min-width:601px) and (max-width:1024px){#press .item:first-child,#press .item:nth-child(2){border-bottom:1px solid #fff}#press .item:nth-child(2){border-left:1px solid #fff}#press .item:nth-child(3){border-right:1px solid #fff}#press .item:nth-child(3),#press .item:nth-child(4){border-bottom:1px solid #fff}#press .item:nth-child(5){border-right:1px solid #fff}}@media only screen and (max-width:600px){#press .item{border-bottom:1px solid #fff;padding:15px}}",""])},278:function(t,e,n){"use strict";n.r(e);var r=n(73),o=n.n(r),d={data:function(){return{loading:!1,data:[]}},methods:{loadData:function(){var t=this;this.loading=!0,o.a.get(this.$store.state.apiPath+"/api/presss/all").then(function(e){t.data=e.data,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})}},mounted:function(){this.loadData()}},l=(n(220),n(20)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",grey:"","lighten-3":"","py-5":"","px-1":""}},[n("v-flex",{attrs:{"px-2":"",xs12:"","text-xs-center":"","font-weight-thin":"","display-2":"","mt-2":"","mb-2":""}},[t._v("OUR PRESS")]),t._v(" "),n("v-flex",{attrs:{"px-3":"","text-xs-center":"","font-weight-thin":"",subheading:""}},[t._v("\n    For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22\n  ")]),t._v(" "),n("v-layout",{attrs:{id:"press","mt-4":"",row:"",wrap:"","font-weight-light":"",subheading:""}},t._l(t.data,function(e,i){return n("v-flex",{key:i,attrs:{item:"",xs12:"",sm6:"",md4:"","py-4":""}},[n("img",{staticStyle:{float:"left","margin-right":"20px","margin-top":"9px"},attrs:{src:t.$store.state.apiPath+e.image,width:"100"}}),t._v(" "),n("h3",{staticStyle:{margin:"10px 0"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.body))]),t._v(" "),n("v-btn",{staticStyle:{"margin-top":"15px"},attrs:{small:"",outline:"",color:"info",href:t.$store.state.apiPath+e.pdf}},[t._v("download pdf")])],1)}),1)],1)},[],!1,null,null,null);e.default=component.exports}}]);