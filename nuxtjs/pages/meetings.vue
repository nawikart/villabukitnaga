
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
        <h1>Meetings</h1><br />
        <b><i>Looking for business meeting venue?</i></b><br /><br />
        Villa Bukit Naga is exclusive, spacious and totally private.<br />
        <br />
        Please contact our Reservation Manager, Erma for details: Email: reservation@villabukitnaga.com<br />
        <br />
        Mobile/WhatsApp : +62 811 388 1122<br /><br />
      </v-flex>
      <v-container  fluid>
        <v-layout justify-center align-start sm12 m6 l4 row>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/meetings/05_0.jpg" style="margin:5px;" height="250px" />
            <v-img src="/img/meetings/01_0.jpg" style="margin:5px;" height="250px" />
          </v-layout>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/meetings/02_0.jpg" style="margin:5px;" height="250px" />
            <v-img src="/img/meetings/06.jpg" style="margin:5px;" height="auto" />
          </v-layout>
          <v-layout sm12 m6 l4 column width="30%">
            <v-img src="/img/meetings/04.jpg" style="margin:5px;" height="250px" />
     
          </v-layout>
        </v-layout>
        

        

      </v-container>

    </v-layout>
  </v-container>

</template>
