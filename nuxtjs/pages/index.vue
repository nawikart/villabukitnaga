<template white>
  <div>

    <!-- <parallax/> -->
    <carousel />
    <v-container>
      <v-flex mt-5 text-xs-center font-weight-thin headline style="color:#666;font-weight:400!important;">
        WELCOME TO <span class="text-no-wrap font-weight-medium green--text">VILLA BUKIT NAGA</span>.<br />
        THE UNIQUE PROPERTY PERCHED HIGH ON A HILL, ABOVE A VALLEY<br />IN WHICH TWO SACRED RIVERS MEET.
      </v-flex>
      <v-flex mt-5 mb-5 text-xs-center font-weight-thin subheading style="color:#444;">
        This villa estate features 7 bedrooms in 3 elegant buildings and can accommodate up to 13 guests in well-appointed luxury.
        The villa estate is rented as a single property and guests will have exclusive use of all facilities. At VILLA BUKIT NAGA our aim is to provide a relax and friendly environment
      </v-flex>
    </v-container>
    <gridFeature />
    <parallax2 />
    <team />
    <div id="testimonials"><testimonials /></div>
    <v-flex xs12 black lighten-1 py-5>
      <v-container>
        <v-flex xs12 text-xs-center white--text font-weight-medium display-1>FEATURED VIDEO</v-flex>
        <br /><br />
        <v-flex xs12 text-xs-center>
          <iframe frameborder="0" height="550" src="http://www.youtube.com/embed/TKf1ltFwMIA?autoplay=0&amp;showinfo=0&amp;rel=0" width="100%"></iframe>
        </v-flex>
      </v-container>
    </v-flex>

  </div>
</template>


<script>
// import parallax from '~/components/front/parallax.vue'
 import parallax2 from '~/components/front/parallax2.vue'
 import gridFeature from '~/components/front/gridFeature.vue'
 import carousel from '~/components/front/carousel.vue'
 import windows from '~/components/front/windows.vue'
 import testimony from '~/components/front/testimony.vue'
  import team from '~/components/front/team.vue'
  import testimonials from '~/components/front/testimonials.vue'
  


export default {
  components: {
    // parallax,
    parallax2,
    testimony,    
    gridFeature,    
    windows,
    carousel,
    team,
    testimonials
  }
}
</script>


<style>
  @media (max-width:1900px) {
    .capsize {
      margin-top: 10pt;      
      font-size: 40pt;
    }
    .capsizeteam {
      margin-top: -20pt;
      font-size: 40pt;
    }
  }

  @media (max-width:800px) {
    .capsize {
      margin-top: 5pt;
      font-size: 20pt;
    }
    .capsizeteam {
      margin-top: 5pt;
      font-size: 30pt;
    }
  }

  @media only screen and (min-width: 1801px) {
    .leftright {
      padding-left: 85px;
      padding-right: 85px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1800px) {
    .leftright {
      padding-left: 85px;
      padding-right: 85px;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    .leftright {
      padding-left: 35px;
      padding-right: 35px;
    }
  }

  @media only screen and (max-width: 600px) {
    .leftright {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

</style>
