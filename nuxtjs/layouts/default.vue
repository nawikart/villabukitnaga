<template>
  <v-app>
    <v-toolbar flat color="grey lighten-5" style="max-width:1136px;margin:0 auto;">
      <v-toolbar-side-icon v-on:click="drawer=true" class="mobile"></v-toolbar-side-icon>
      <v-toolbar-title>Bukit Naga</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(m, i) in menu" :key="i">
          <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>    
    <nuxt />
    <v-flex xs12 white darken-2>
      <v-container>
        <v-layout row wrap black--text font-weight-light subheading py-3>
          <v-flex xs12 sm6 md4>Copyright © 2019 Villa Bukit Naga Bali. <br />All rights reserved.</v-flex>
          <v-flex xs12 sm6 md4></v-flex>
          <v-flex xs12 sm6 md4>
            <v-img src="/link.png" width="250" height="50" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list class="pa-1">
            <v-list-tile avatar>
              <!-- <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar> -->

              <v-list-tile-content>
                <v-list-tile-title>Bukit Naga</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile v-for="(m, i) in menu" :key="i">
              <!-- <v-list-tile-action>
                <v-icon>{{ m.icon }}</v-icon>
              </v-list-tile-action> -->

              <v-list-tile-content>
                <v-list-tile-title><nuxt-link :to="m.to">{{ m.title }}</nuxt-link></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>    
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        menu: [
          { icon: '', title: 'Home', to: '/' },
          { icon: '', title: 'Villa', to: '/villa' },
          { icon: '', title: 'About Bali', to: '/about-bali' },
          { icon: '', title: 'FAQs', to: '/faqs' },
          { icon: '', title: 'Contact', to: '/contact' },
          { icon: '', title: 'Press', to: '/press' },
          { icon: '', title: 'Reservation', to: '/reservation' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>


<style>
.mobile{
  display: none;
}
@media only screen and (max-width: 600px) {
  #testimonials{
    display: none;
  }
  .mobile{
    display: block;
  }
}
</style>
