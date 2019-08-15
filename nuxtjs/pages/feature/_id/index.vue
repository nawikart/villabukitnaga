
<style>
@media only screen and (min-width: 1025px) {
  .rpad {
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 20px;
  }

  .rpl {
    padding-left: 50px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .rpad {
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 20px;
  }

  .rpl {
    padding-left: 50px;
  }
}

@media only screen and (max-width: 600px) {
  .rpad {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }

  .rpl {
    padding-left: 10px;
  }
}

#grid6 {
  max-width: 1360px;
  margin: auto;
}

#grid6 .item {
  padding: 8px !important;
}

@media only screen and (max-width: 768px) {
  .grid-sizer {
    width: 25%;
  }
.work-thumb{
  width:200px;
}
  .item {
    width: 25%%;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .box-0 {
    width: 100%;
  }
}

@media only screen and (min-width: 769px) {
  .grid-sizer {
    width: 100px;
  }
.work-thumb{
  width:300px;
}
  .item {
    width: 25%px;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .box-0 {
    width: 66%;
  }
}

@media only screen and (min-width: 1200px) {
  .grid-sizer {
    width: 33%;
  }
.work-thumb{
  width:300px;
}
  .item {
    width: 33%;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .box-0 {
    width: 50%;
  }
}
</style>

<template>
  <v-container>
      <v-flex xs12 class="rpad">{{ data.body }}</v-flex>    
      <nossr>
      <div class="viewer m-2 mt-3 mt-5 m-md-5">
        <div class="grid-sizer" ></div>
        <div class="item" v-for="(img, i) in data.images" :key="i">
          <img class="work-thumb" :src="$store.state.apiPath + img">
          <!-- <div class="working-desc small">Test1</div> -->
        </div>      
      </div>
      </nossr>
  </v-container>
</template>

 

<script>
if (process.client) {
  var Masonry = require("masonry-layout");
  var ImagesLoaded = require("imagesloaded");
}

import axios from 'axios'

export default {
  data() {
    return {
        loading: false,
        data: {},
        uuid:{
            weddings: 'e0d0d8fd-69d4-11e9-8b4a-88b111167862',
            meetings: '0b66c5e1-69d7-11e9-8b4a-88b111167862',
            'coorporate-functions': '1fc2da5a-69d7-11e9-8b4a-88b111167862',
            'reunions': '32af73c9-69d7-11e9-8b4a-88b111167862',
            'special-events': '3efd36c0-69d7-11e9-8b4a-88b111167862',
            birthdays: 'f89e1969-69d6-11e9-8b4a-88b111167862'
        },

      selector: ".viewer",
      options: {
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 0,
        itemSelector: ".item"
        
      },
    };
  },
   
  methods: {

    loadData(){
      const axithis = this
      this.loading = true
      axios.get(this.$store.state.apiPath + '/api/feature/'+ this.uuid[this.$route.params.id])
      .then(function (response) {
          // console.log(response.data)
          axithis.data = response.data
          axithis.loading = false
          axithis.loaded();
      })
          .catch(function (err) {
          console.log(err)
          axithis.loading = false
          })       
    },
    
    
    loaded() {
      // all images are loaded

      ImagesLoaded(this.selector, () => {
        this.$emit("masonry-images-loaded");

        // activate mansonry grid

        let masonry = new Masonry(this.selector, this.options);

        this.$emit("masonry-loaded", masonry);
      });
    }
  },
  watch: {
    data() {
      this.loaded();
    }
  },

  mounted() {
        this.loadData()
  }
};
</script>