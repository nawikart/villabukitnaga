<template>
  <v-flex xs12 grey lighten-3 py-5 px-1>
    <v-flex px-2 xs12 text-xs-center font-weight-thin display-2 mt-2 mb-2>OUR PRESS</v-flex>
    <v-flex px-3 text-xs-center font-weight-thin subheading>
      For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22
    </v-flex>
    <v-layout id="press" mt-4 row wrap font-weight-light subheading>
      <v-flex item xs12 sm6 md4 py-4 v-for="(d, i) in data" :key="i">
        <img :src="$store.state.apiPath + d.image" width="100" style="float:left;margin-right:20px;margin-top:9px;" />
        <h3 style="margin:10px 0;">{{ d.title }}</h3>
        <p style="font-size:13px;">{{ d.body }}</p>
        <v-btn small outline color="info" :href="$store.state.apiPath + d.pdf" style="margin-top:15px;" >download pdf</v-btn>
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
      data: []
    }
  },
  methods: {
    loadData(){
      const axithis = this
      this.loading = true
      axios.get(this.$store.state.apiPath + '/api/presss/all')
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
  #press {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1025px) {
    #press .item:nth-child(1) {
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(2) {
      border-left: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
    }

    #press .item:nth-child(3) {
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(5) {
      border-left: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
    }
  }

  @media only screen and (min-width: 601px) {
    #press .item {
      padding: 30px;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    #press .item:nth-child(1) {
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(2) {
      border-left: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(3) {
      border-right: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(4) {
      border-bottom: 1px solid #ffffff;
    }

    #press .item:nth-child(5) {
      border-right: 1px solid #ffffff;
    }
  }

  @media only screen and (max-width: 600px) {
    #press .item {
      border-bottom: 1px solid #ffffff;
      padding: 15px;
    }
  }
</style>
