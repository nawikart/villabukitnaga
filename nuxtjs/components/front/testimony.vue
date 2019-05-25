
<template>
  <v-carousel height="550" hide-delimiters>
    <v-carousel-item v-for="(item,i) in items"
                     :key="i"
                     :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: '/slide1.jpg'
          },
          {
            src: '/slide2.jpg'
          },
          {
            src: '/slide3.jpg'
          },
          {
            src: '/slide4.jpg'
          }
        ]
      }
    }
  }
</script>
