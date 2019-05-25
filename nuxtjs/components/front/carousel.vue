<template>
  <v-carousel hide-delimiters height="550"  style="background: url(/assets/images/loading.gif) no-repeat center;">
    <v-carousel-item v-for="(item,i) in items"
                     :key="i"
                     :src="item.src"></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/assets/images/slide1.jpg'
          },
          {
            src: '/assets/images/slide2.jpg'
          },
          {
            src: '/assets/images/slide3.jpg'
          },
          {
            src: '/assets/images/slide4.jpg'
          }
        ]
      }
    }
  }
</script>
