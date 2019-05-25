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
</style>
<template v-if="galleryCount(data)">
  <div class="grey lighten-3 py-5">
    <div style="max-width:1200px;display:table;margin:auto;">
      <v-flex mb-5 display-1 xs12 text-xs-center font-weight-medium>Testimonials</v-flex>
      <div class="slider">
        <no-ssr>
          <carousel :mouse-drag="true" :perPageCustom="[[300, 1],[768, 2], [1250, 3]]">
            <slide>
              <v-flex text-xs-center style="padding:15px;">
                  <h3 style="color:#666;display:block;margin-bottom:7px;">Wonderful Stay, Great Staff</h3>
                  <b class="caption">Laura_PBlondie - Bournemouth, United Kingdom</b><br /><br />
                  Reviewed September 22, 2016<br /><br />
                  <i>Such a wonderful stay with the family, don’t be fooled this place is LARGE, it was perfect for all the family! Food cooked in house by the team was gorgeous and competitively priced. Nothing was ever difficult. Kind, attentive team. Thank-you so... 
                    </i>
                    
                    <a href="reviews/laura"><v-btn flat>Read More</v-btn>
                </a>
              </v-flex>
            </slide>
            <slide>
              <v-flex text-xs-center style="padding:15px;">
                  <h3 style="color:#666;display:block;margin-bottom:7px;">Great venue for board retreat</h3>
                  <b class="caption">Rdjohani - Denpasar, Indonesia</b><br /><br />
                  Reviewed August 18, 2016<br /><br />
                  <i>Villa Bukit Naga is a great venue for a board retreat with wonderful staff. I rented the villa for our board meeting for two days in April 2016. One spacious living room was turned into a board room. Excellent lunches were served at the adjacent... 
                    </i>
                    <a href="reviews/johani"><v-btn flat>Read More</v-btn>
                </a>
              </v-flex>
            </slide>
            <slide>
              <v-flex text-xs-center style="padding:15px;">
                  <h3 style="color:#666;display:block;margin-bottom:7px;">
                    Wedding of my dreams!!!
                  </h3>
                  <b class="caption">Ren - J Perth, Australia</b><br /><br />
                  Reviewed June 29, 2015<br /><br />
                  <i>Amazing. Totally exceeded my expectations again and again (which were already pretty high). The setting and views are stunning. There really are no words to describe how impressive and peaceful the location is. The Villa itself is outstanding.... 
                    </i>
                    <a href="reviews/j"><v-btn flat>Read More</v-btn>
                </a>
              </v-flex>
            </slide>
            <slide>
              <v-flex text-xs-center style="padding:15px;">
                  <h3 style="color:#666;display:block;margin-bottom:7px;">
                    Perfect
                  </h3>
                  <b class="caption">Emeraldcitytaveler - Seattle, WA</b><br /><br />
                  Reviewed January 24, 2015<br /><br />
                  <i>Words cannot describe how incredible our experience was Villa Bukit Naga. And its staff, perfection. Every year a group of family and friends spend the Christmas/New Years holiday in a different location. Last year we chose Bali. After much... 
                    </i>
                  <a href="reviews/emerald"><v-btn flat>Read More</v-btn></a>
              </v-flex>
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </div>
</template>


<script>
  import('vue-carousel').then( )
  export default {
    name: 'ArticleSlider',
    components: {
      Carousel: () => import('vue-carousel').then(m => m.Carousel),
      Slide: () => import('vue-carousel').then(m => m.Slide)
    }
  }
</script>


<style>
.VueCarousel-pagination button.VueCarousel-dot{
  background-color: #999!important;
}
.VueCarousel-pagination button.VueCarousel-dot.VueCarousel-dot--active{
  background-color: #000!important;
}
.VueCarousel-inner{
  /* flex-basis: 100%!important; */
}
</style>
