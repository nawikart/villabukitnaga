<template>
    <v-flex xs12>
        <v-parallax class="overlayed" src="/assets/images/slide2.jpg" height="250">
            <div class="middle text-xs-center px-3">    
                <p class="font-weight-light display-1">ABOUT UBUD, BALI</p>
                <p class="font-weight-medium subheading">For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22</p>
            </div>        
        </v-parallax>

        <v-layout row wrap font-weight-light style="max-width:1280px;margin:auto;">
            <v-flex xs12 md7 py-5 px-4 v-html="data.body1"></v-flex>
            <v-flex xs12 md5 py-5 px-4 v-html="data.body2"></v-flex>
        </v-layout>             
    </v-flex>
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      data: {}
    }
  },
  methods: {
    loadData(){
      const axithis = this
      this.loading = true
      axios.get(this.$store.state.apiPath + '/api/about_bali/2226c7b7-610a-11e9-82c7-88b111167862')
      .then(function (response) {
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