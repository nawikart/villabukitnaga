
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
</style>

<template>
  <v-container fluid grey lighten-3>
    <v-layout column>
      <v-flex xs12 class="rpad">
        <h1>Reunions</h1><br />
        Villa Bukit Naga makes a perfect venue for any gathering. With a capacity of up to 100 persons for sit-down party, the estate has been designed for intimate social gatherings set against a lush forest backdrop.
        <br />
      </v-flex>
      <v-container  fluid>
        <v-layout justify-center align-start sm12 m6 l4 row>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/reunions/r3.jpg" style="margin:5px;" height="250px" />            
          </v-layout>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/reunions/IMG_6701.jpg" style="margin:5px;" height="250px" />            
          </v-layout>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/reunions/r2.jpg" style="margin:5px;" height="250px" />     
          </v-layout>
        </v-layout>
        

        

      </v-container>

    </v-layout>
  </v-container>

</template>
