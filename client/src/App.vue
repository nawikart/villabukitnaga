<template>
  <a-layout :class="[{'login': login}]" id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      width='245'>
      <!-- <div class="logo"></div> -->
      <div v-if="collapsed">
        <img src="/static/naga.png" height="68" class="logo-sidebar"/>
      </div>
      <div v-else>
        <img src="/static/naga.png" height="64" class="logo-sidebar"/> <span style="color:white;font-size:22px;margin-left:10px;">Naga Bali</span>
      </div>

      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="star"/><span>Feature</span></span>
          <a-menu-item key="3" v-on:click="$router.push({ path: '/admiin/features' })"><a-icon size="large" type="table" />Listing</a-menu-item>
          <a-menu-item key="4" v-on:click="$router.push({ path: '/admiin/feature' })"><a-icon type="form" />Add new</a-menu-item>
        </a-sub-menu>

        <a-menu-item key="2" v-on:click="$router.push({ path: '/admiin/gallery?uuid=e1e2f90b-611a-11e9-82c7-88b111167862' })">
          <a-icon type="camera" />
          <span class="nav-text">Photo Gallery</span>
        </a-menu-item>        
        <a-menu-item key="3" v-on:click="$router.push({ path: '/admiin//about-bali?uuid=2226c7b7-610a-11e9-82c7-88b111167862' })">
          <a-icon type="question" />
          <span class="nav-text">About Bali</span>
        </a-menu-item>
        <!-- <a-menu-item key="4" v-on:click="$router.push({ path: '/admiin/villa' })">
          <a-icon type="home" />
          <span class="nav-text">Villa</span>
        </a-menu-item> -->
        <!-- <a-menu-item key="5" v-on:click="$router.push({ path: '/admiin/testimony' })">
          <a-icon type="heart" />
          <span class="nav-text">Testimony</span>
        </a-menu-item>
        <a-menu-item key="6" v-on:click="$router.push({ path: '/admiin/team' })">
          <a-icon type="heart" />
          <span class="nav-text">Team</span>
        </a-menu-item> -->
        <a-sub-menu key="sub7">
          <span slot="title"><a-icon type="book"/><span>Press</span></span>
          <a-menu-item key="3" v-on:click="$router.push({ path: '/admiin/presss' })"><a-icon size="large" type="table" />Listing</a-menu-item>
          <a-menu-item key="4" v-on:click="$router.push({ path: '/admiin/press' })"><a-icon type="form" />Add new</a-menu-item>
        </a-sub-menu>        
      </a-menu>
    </a-layout-sider>
    
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <!-- <img v-if="collapsed" src="/static/logo.png" height="20" /> -->

        <div style="float:right;margin-right:20px;">
          <!-- <a-button class="noborder"><a-icon type="search" /></a-button> -->
          <!-- <a-button class="noborder"><a-icon type="question-circle" /></a-button> -->
          <a-popover placement="bottomRight">
            <template slot="content">
              <!-- <a-button class="noborder"><a-icon type="user" /> Profile</a-button> -->
              <a-button class="noborder" v-on:click="logout()"><a-icon type="logout" /> Logout</a-button>
            </template>
            <a-button class="noborder"><a-icon type="user" /> {{loginData.name}}</a-button>
          </a-popover>          
        </div>
        
        <div style="float:right;margin-right:20px;width: calc(100% - 300px);margin-top:13px;">
            .
        </div>          

      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: 'calc(100vh - 50px)' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
      isAdmin: false,
      loginData: {},
      searchQuery: '',
      searchDt: '',

      collapsed: false,
      login: true
    }
  },

  watch: {
    $route: function (val) {
      if(val.name == 'login'){
         this.login = true
      }else{
        this.login = false
      }
    }
  },

  methods: {
    search(){
      var query = this.searchQuery
      var dt = new Date(this.searchDt)
      var dtYmd = ''

      // alert(this.searchDt)
      if(this.searchDt != '' && this.searchDt != undefined){
        dtYmd = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
      }

      if(query != '' && dtYmd != ''){
        var url = '/admin/members/search?query='+ query + '&date='+ dtYmd
      }else{
        var url = '/admin/members/search?query='+ query
      }
      this.$router.push({ path: url })
    },
    logout(){
        var loginName = localStorage.getItem('loginName')
        localStorage.removeItem('jwtoken')
        localStorage.removeItem('loginUuid')
        localStorage.removeItem('loginName')
        
        window.location.href = '/admiin'
        // if(loginName == 'Admin'){
        //   window.location.href = '/sa'
        // }else{
        //   window.location.href = '/'
        // }
    }
  },
  mounted() {
      /// begin check auth and expiration
      if(localStorage.getItem('lastLogin') && this.$route.name != 'login'){
        var fromLastTime = (new Date().getTime() - parseInt(localStorage.getItem('lastLogin'))) / (24 * 60 * 60000)
        if((fromLastTime >= 1 || !localStorage.getItem('jwtoken')) && localStorage.getItem('loginName')){
          // window.location.href = '/'
        }
      }
      // end check auth and expiration

      if(this.$route.name == 'login'){
        this.login = true
      }else{
        this.login = false
        this.loginData = {
          'uuid': localStorage.getItem('loginUuid'),
          'name': localStorage.getItem('loginName')
        }
        if(this.loginData.name == 'Admin'){
          this.isAdmin = true
        }            
      }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');
sup, 
span, 
h1, h2, h3, h4,
div, 
li, 
li.ant-menu-item,
textarea,
input {
  font-family: 'Anonymous Pro', monospace!important;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #5A6CB8;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.ant-layout-sider{
  box-shadow: 0px 0px 9px 1px rgba(4, 4, 4, 0.1)!important;
  background: #6879CD!important;
}
.ant-menu{
  border: none!important;
}
.ant-menu span i{
  font-size: 18px!important;
}
.ant-menu-inline-collapsed.ant-menu li{
  margin-top: 16px;
}
.ant-menu-inline-collapsed.ant-menu span i{
  font-size: 24px!important;
  margin-left: -4px!important;
  color: #ffffff;
}
.ant-menu{
  background: #6879CD!important;  
}
.ant-menu span span{
  font-size: 16px!important;  
  color: #ffffff;
}
.ant-menu li{
  font-family: 'Source Sans Pro', cursive!important;
  /* color: #ffffff; */
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub{
  box-shadow: none!important;
}
.ant-menu-submenu-open{
  /* background-color: #387EED!important; */
  font-weight: bold;
}
.ant-menu-item-selected{
  color: #6879CD;
  background: #fff;
}
.noborder{
  border: none!important;
  box-shadow: none!important;
}
.logo-sidebar{
  padding-left: 24px;
  margin: 25px 0;
}

@media only screen and (max-width: 600px) {
  .ant-layout-sider,
  .ant-layout-header form{
    display: none;
  }
  .ant-layout-content,
  .MainCards > div{
    padding: 5px!important;
  }
  h1.mainTitle:before{
    margin-right: 10px!important;
    margin-left: -4px!important;
  }
  h1.mainTitle{
    margin-bottom: 20px!important;
  }
}
</style>