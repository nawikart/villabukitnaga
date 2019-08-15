
<template>
    <v-flex grey lighten-3>
        <v-layout id="grid6" row wrap py-5 font-weight-thin subheading >
          <v-flex xs12 text-xs-center font-weight-medium display-1 mb-5 style="color:#444;">Ideal Venue For Events</v-flex>
          <v-flex item iteem xs12 sm6 md4 px-4 py-4 v-for="(d, i) in data" :key="i">
            <v-icon medium color="teal lighten-1" style="float:left;margin-right:10px;">home</v-icon>
            <h3>{{ d.title }}</h3>
            <p style="font-size:14px;margin-top:10px;">{{ d.body }}</p>
            <p><v-btn flat color="grey" :href="'/feature/'+ key[d.uuid]">learn more</v-btn></p>
          </v-flex>
        </v-layout>      
    </v-flex>
 
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      data: [],
      key:{
          'e0d0d8fd-69d4-11e9-8b4a-88b111167862': 'weddings',
          '0b66c5e1-69d7-11e9-8b4a-88b111167862': 'meetings',
          '1fc2da5a-69d7-11e9-8b4a-88b111167862': 'coorporate-functions',
          '32af73c9-69d7-11e9-8b4a-88b111167862': 'reunions',
          '3efd36c0-69d7-11e9-8b4a-88b111167862': 'special-events',
          'f89e1969-69d6-11e9-8b4a-88b111167862': 'birthdays'
      },      
    }
  },
  methods: {
    loadData(){
      const axithis = this
      this.loading = true
      axios.get(this.$store.state.apiPath + '/api/features/all')
      .then(function (response) {
          // console.log(response.data)
          axithis.data = response.data
          axithis.loading = false
      })
          .catch(function (err) {
          console.log(err)
          axithis.loading = false
          })       
    },
  },

  mounted(){
    this.loadData()
  }
}
</script>


<style>
  @media only screen and (min-width: 1025px) {
    #grid6 {
      max-width: 1280px;
      margin: auto;
    }

      #grid6 .item.iteem {
        padding: 38px !important;
      }

        #grid6 .item:nth-child(2) {
          border-bottom: 1px solid #ffffff;
        }

        #grid6 .item:nth-child(3) {
          border-left: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          border-right: 1px solid #ffffff;
        }

        #grid6 .item:nth-child(4) {
          border-bottom: 1px solid #ffffff;
        }

        #grid6 .item:nth-child(6) {
          border-left: 1px solid #ffffff;
          border-right: 1px solid #ffffff;
        }
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    #grid6 .item:nth-child(2) {
      border-bottom: 1px solid #ffffff;
    }

    #grid6 .item:nth-child(3) {
      border-left: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }

    #grid6 .item:nth-child(4) {
      border-right: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }

    #grid6 .item:nth-child(5) {
      border-bottom: 1px solid #ffffff;
    }

    #grid6 .item:nth-child(6) {
      border-right: 1px solid #ffffff;
    }
  }

  @media only screen and (max-width: 600px) {
    #grid6 .item.iteem {
      padding: 38px !important;
    }    
    #grid6 .item {
      border-bottom: 1px solid #ffffff;
    }
  }
</style>

