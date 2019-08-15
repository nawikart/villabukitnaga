
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
        <h1>The Managers And Team</h1><br />
        <v-img max-width="400px" height="400" src="/assets/img/MNT.jpg" />      
        <br />
        A solid team that brings a vast array of skills and experience to make your stay memorable.
      </v-flex>
    </v-layout>
  </v-container>

</template>
