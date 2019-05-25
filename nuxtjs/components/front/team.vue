<style>
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    color: darkred;
  }
.swidth {width:200px;}
</style>

<template  >
  <v-container>
    <v-layout column font-weight-medium subheading py-5>
      <v-flex display-1 xs12 text-xs-center font-weight-medium>Meet The Team</v-flex><br />
      <p align="center">Villa Bukit Naga has 12 full-time staff who will attend to your every need.<br />
      A fun, motivated and an energized team. The majority of our staff have been with the Villa since <br />
      the inception in 2002, we are very lucky in that respect. </p>
      <div>
        <div>
          <no-ssr>
            <carousel :mouse-drag="true" :navigationEnabled="true" :paginationEnabled="false" :perPageCustom="[[300, 1],[800, 2], [1250, 3]]">
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">
                  <v-img src="/assets/img/GEDEPARTAYASA.jpg" />
                  <v-flex  class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">GEDE PARTA YASA</v-flex>
                  <v-btn flat href="/employee/erma"  class="subheading" font-weight-thin style="text-align: center;">Villa Manager</v-btn>

                </v-flex>
              </slide>
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">
                  <v-img src="/assets/img/ERMASUSANTI.jpg"  />
                  <v-flex  class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">ERMA SUSANTI</v-flex>
                  <v-btn flat href="/employee/erma"  class="subheading" font-weight-thin style="text-align: center;">Reservation Manager</v-btn>

                </v-flex>
              </slide>
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">
                  <v-img src="/assets/img/LUHPUTU.jpg"  />
                  <v-flex class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">LUH PUTU WIDIYASIH</v-flex>
                  <v-btn flat href="/employee/luhputu"  class="subheading" font-weight-thin style="text-align: center;">Chef</v-btn>

                </v-flex>
              </slide>
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">
                  <v-img src="/assets/img/IMADE.jpg"  />
                  <v-flex class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">I MADE WIDIARTA</v-flex>
                  <v-btn flat href="/employee/imade"  class="subheading" font-weight-thin style="text-align: center;">Villa Manager</v-btn>

                </v-flex>
              </slide>
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">

                  <v-img src="/assets/img/MNT.jpg"  />
                  <v-flex class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">MANAGER AND TEAM</v-flex>
                  <v-btn flat href="/employee/mnt"  class="subheading" style="text-align: center;">MANAGER AND TEAM</v-btn>

                </v-flex>
              </slide>
              <slide class="swidth">
                <v-flex text-xs-center style="padding:15px;">
                  <v-img src="/assets/img/HGS.jpg"  />
                  <v-flex class="headline" style="text-align: center;padding-top:8px;margin-top:20px;">HOUSEKEEPING SECURITY</v-flex>
                  <v-btn flat href="/employee/hgs" class="subheading" style="text-align: center;">HOUSEKEEPING SECURITY</v-btn>
                </v-flex>
              </slide>

            </carousel>
          </no-ssr>
        </div>
      </div>


    </v-layout>
  </v-container>
</template>



<script>
  import('vue-carousel').then(m => console.log(m))
  export default {
    name: 'ArticleSlider',
    components: {
      Carousel: () => import('vue-carousel').then(m => m.Carousel),
      Slide: () => import('vue-carousel').then(m => m.Slide)
    }  
  }
</script>
