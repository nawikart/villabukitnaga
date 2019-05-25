(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{265:function(a,t,e){"use strict";e.r(t);var s=e(67),l=e.n(s),i={data:function(){return{dialogStartDate:!1,dialogEndDate:!1,valid:!0,loading:!1,successAlert:!1,data:{},requiredRules:[function(a){return!!a||"this item is required"}],emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||"E-mail must be valid"}]}},methods:{send:function(){if(this.$refs.form.validate()){console.log(this.data);var a=new FormData;a.append("adults",this.data.adults),a.append("childrens",this.data.childrens),a.append("infants",this.data.infants),a.append("startdate",this.data.startdate),a.append("enddate",this.data.enddate),a.append("firstname",this.data.firstname),a.append("lastname",this.data.lastname),a.append("email",this.data.email),a.append("company",this.data.company),a.append("telp",this.data.telp),a.append("fax",this.data.fax),a.append("enquiry",this.data.enquiry),this.loading=!0;var t=this;l.a.post(this.$store.state.apiPath+"/api/reservation",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(a){console.log(a.data),t.loading=!1,t.successAlert=!0}).catch(function(a){console.log(a),t.loading=!1})}},reset:function(){this.$refs.form.reset()}}},n=e(17),d=Object(n.a)(i,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-parallax",{staticClass:"overlayed",attrs:{src:"/assets/images/slide1.jpg",height:"250"}},[e("div",{staticClass:"middle text-xs-center px-3"},[e("p",{staticClass:"font-weight-thin display-1"},[a._v("MAKE A RESERVATION")]),a._v(" "),e("p",{staticClass:"font-weight-thin subheading"},[a._v("For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22")])])]),a._v(" "),e("v-layout",{staticStyle:{"max-width":"1200px",margin:"auto"},attrs:{row:"",wrap:"","font-weight-thin":""}},[e("v-flex",{attrs:{"text-md-right":"","text-xs-center":"",xs12:"",md5:"","py-5":"","px-4":"","font-weight-thin":"",subheading:""}},[e("p",{staticClass:"font-weight-thin title blue--text mt-5"},[a._v("MAKE A RESERVATION")]),a._v(" "),e("p",[a._v("Villa Bukit Naga"),e("br"),a._v("\n            Gianyar, Bali - Indonesia")]),a._v(" "),e("p",[a._v("Villa Telephone: + 62 361 941118"),e("br"),a._v("\n            Reservation Telephone: +62 811 388 1122"),e("br"),a._v("\n            Email: info@villabukitnaga.com")]),a._v(" "),e("p",[a._v("Time Zone GMT +8")])]),a._v(" "),e("v-flex",{attrs:{xs12:"",md7:"","py-5":"","px-4":""}},[e("v-alert",{staticClass:"mb-5",attrs:{color:"green",dismissible:"",type:"success"},model:{value:a.successAlert,callback:function(t){a.successAlert=t},expression:"successAlert"}},[a._v("\n                  Email sent.\n                ")]),a._v(" "),e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h3",[a._v("Requirements")])]),a._v(" "),e("v-flex",{attrs:{xs12:"",sm4:"","my-3":""}},[e("v-select",{attrs:{items:[1,2,3,4,5],label:"No. Adult"},model:{value:a.data.adults,callback:function(t){a.$set(a.data,"adults",t)},expression:"data.adults"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm4:"","my-3":""}},[e("v-select",{attrs:{items:[1,2,3,4,5],label:"No. Children"},model:{value:a.data.childrens,callback:function(t){a.$set(a.data,"childrens",t)},expression:"data.childrens"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm4:"","my-3":""}},[e("v-select",{attrs:{items:[1,2,3,4,5],label:"No. Infants"},model:{value:a.data.infants,callback:function(t){a.$set(a.data,"infants",t)},expression:"data.infants"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[e("v-text-field",{attrs:{label:"Start date"},on:{click:function(t){a.dialogStartDate=!0}},model:{value:a.data.startdate,callback:function(t){a.$set(a.data,"startdate",t)},expression:"data.startdate"}}),a._v(" "),e("v-dialog",{attrs:{"max-width":"290"},on:{click:function(t){a.dialogStartDate=!1}},model:{value:a.dialogStartDate,callback:function(t){a.dialogStartDate=t},expression:"dialogStartDate"}},[e("v-date-picker",{model:{value:a.data.startdate,callback:function(t){a.$set(a.data,"startdate",t)},expression:"data.startdate"}})],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[e("v-text-field",{attrs:{label:"End date"},on:{click:function(t){a.dialogEndDate=!0}},model:{value:a.data.enddate,callback:function(t){a.$set(a.data,"enddate",t)},expression:"data.enddate"}}),a._v(" "),e("v-dialog",{attrs:{"max-width":"290"},on:{click:function(t){a.dialogEndDate=!1}},model:{value:a.dialogEndDate,callback:function(t){a.dialogEndDate=t},expression:"dialogEndDate"}},[e("v-date-picker",{model:{value:a.data.enddate,callback:function(t){a.$set(a.data,"enddate",t)},expression:"data.enddate"}})],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"","mt-5":""}},[e("h3",[a._v("Your Details")])]),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"First name",required:""},model:{value:a.data.firstname,callback:function(t){a.$set(a.data,"firstname",t)},expression:"data.firstname"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Last name",required:""},model:{value:a.data.lastname,callback:function(t){a.$set(a.data,"lastname",t)},expression:"data.lastname"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","my-3":""}},[e("v-text-field",{attrs:{rules:a.emailRules,label:"E-mail",required:""},model:{value:a.data.email,callback:function(t){a.$set(a.data,"email",t)},expression:"data.email"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Company name",required:""},model:{value:a.data.company,callback:function(t){a.$set(a.data,"company",t)},expression:"data.company"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Address",required:""},model:{value:a.data.address,callback:function(t){a.$set(a.data,"address",t)},expression:"data.address"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Country",required:""},model:{value:a.data.country,callback:function(t){a.$set(a.data,"country",t)},expression:"data.country"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Telp",required:""},model:{value:a.data.telp,callback:function(t){a.$set(a.data,"telp",t)},expression:"data.telp"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"","mb-2":""}},[e("v-text-field",{attrs:{rules:a.requiredRules,label:"Fax",required:""},model:{value:a.data.fax,callback:function(t){a.$set(a.data,"fax",t)},expression:"data.fax"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","my-3":""}},[e("v-textarea",{attrs:{label:"Enquiry"},model:{value:a.data.enquiry,callback:function(t){a.$set(a.data,"enquiry",t)},expression:"data.enquiry"}})],1),a._v(" "),e("v-flex",{attrs:{xs12:"","my-3":""}},[e("v-btn",{staticStyle:{"min-width":"150px"},attrs:{loading:a.loading,color:"blue",dark:""},on:{click:a.send}},[a._v("\n                    Send enquiry\n                    ")]),a._v(" "),e("v-btn",{attrs:{color:"warning"},on:{click:a.reset}},[a._v("\n                    Reset\n                    ")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);d.options.__file="reservation.vue";t.default=d.exports}}]);