<template>
  <v-card fluid>
    <v-parallax
      class="v-parallax-image"
      dark
      src="../assets/home_parrallax.png"
      height="500"
    >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-black mb-4">{{$t('mainTitle')}}</h1>
      </v-col>
    </v-row>
    </v-parallax>
  </v-card>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
