<style>
 
  .overlayed2.v-parallax {
    position: relative;
  }

    .overlayed2.v-parallax:before {
      content: '';
      height: 2000px;
      display: table;
      width: 100%;
      position: absolute;
      /* background-color: rgba(225, 225, 225, .6); */
      background-color: rgba(0, 0, 0, .6);
      z-index: 2;
    }
    
</style>
<template>
  <v-parallax class="overlayed2" src="/assets/images/sawah.jpg" height="525" >
    <v-container grid-list-xl>
      <v-layout wrap xs12>
        <v-flex display-1 xs12 text-xs-center font-weight-medium my-3>Photo Galleries</v-flex>
        <v-flex xs12
                sm12
                md6
                lg6
                d-flex>
          <v-img class="d-flex" gradient :src="$store.state.apiPath + images[0]" aspect-ratio="1.7" />
        </v-flex>



        <v-flex xs12
                sm12
                md6
                lg6
                d-flex>
          <v-layout wrap>
            <v-flex xs6 v-for="(img, i) in images" :key="i" v-if="i>0 && i<5">
              <v-img class="d-flex" gradient :src="$store.state.apiPath + img" aspect-ratio="1.7" />
            </v-flex>
          </v-layout>
        </v-flex>



      </v-layout>
    </v-container>
  </v-parallax>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        images: []
      }
    }
    ,methods: {
        loadData(){
          const axithis = this
          this.loading = true
          axios.get(this.$store.state.apiPath + '/api/gallery/e1e2f90b-611a-11e9-82c7-88b111167862')
          .then(function (response) {
              // console.log(response.data.images)
              // axithis.data = response.data
              axithis.images = response.data.images
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
