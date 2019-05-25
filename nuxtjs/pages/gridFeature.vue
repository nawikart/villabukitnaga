<template>
    <v-layout id="grid6" grey lighten-3 row wrap py-5 font-weight-thin subheading>
      <v-flex xs12 text-xs-center font-weight-medium headline mt-2 mb-5>OUR RECOMMENDED EVENTS</v-flex>
      <v-flex item xs12 sm6 md4 v-for="i in 6" :key="i" px-5 py-5>
          <h3>Weddings</h3>
          <p>Villa Bukit Naga is an ideal setting for Weddings & Engagements. Set against a breathtaking view of Gianyar forest and Mount Batukau, where vows can exchange in the enchanting Secret Garden “A Perfect Match” For an intimate wedding ceremony, the enchanting Secret Garden can accommodate 40 guests comfortably... learn more</p>
      </v-flex>
    </v-layout>    
</template>

<style>
@media only screen and (min-width: 1025px) {
    #grid6{
        padding-left: 60px!important;
        padding-right: 60px!important;
    }    
    #grid6 .item:nth-child(2){
        border-bottom: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(3){
        border-left: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(4){
        border-bottom: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(6){
        border-left: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
    }
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
    #grid6 .item:nth-child(2){
        border-bottom: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(3){
        border-left: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(4){
        border-right: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
    }
    #grid6 .item:nth-child(5){
        border-bottom: 1px solid #ffffff;
    }    
    #grid6 .item:nth-child(6){
        border-right: 1px solid #ffffff;
    }
}
@media only screen and (max-width: 600px) {
    #grid6 .item{
        border-bottom: 1px solid #ffffff;
    }
}
</style>
