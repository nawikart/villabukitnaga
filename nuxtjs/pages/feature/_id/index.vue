<template>
  <v-container>
    <v-flex xs12 class="rpad">{{ data.body }}</v-flex>
    <div class="item" v-for="(img, i) in data.images" :key="i">
      <img class="work-thumb" :src="$store.state.apiPath + img">
    </div>
  </v-container>
</template>

<style>
.rpad{
  padding: 20px;
}
.item img {
  width: 100%;
}
@media only screen and (min-width: 415px) {
  .item {
    width: 300px;
    float: left;
    margin: 10px;
  }
}
@media only screen and (max-width: 414px) {
  .item {
    width: calc(100% - 20px);
    float: left;
    margin: 10px;
  }
}
</style>

<script>
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
  },

  mounted() {
        this.loadData()
  }
};
</script>