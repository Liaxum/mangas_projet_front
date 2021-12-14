<template>
  <v-app>
    <v-app-bar
      app
      dark
      height="80"
    >
      <v-img
        src="./assets/logo.png"
        max-height="70"
        max-width="170"
        contain
      />
      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span class="text-caption">{{$t('navbar.homeTooltip')}}</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/Store"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-store</v-icon>
          </v-btn>
        </template>
        <span> {{$t('navbar.storeTooltip')}}</span>
      </v-tooltip>
      <v-spacer />
      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/Cart"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-badge
              v-if="cartNumber"
              color="green"
              :content="cartNumber"
            >
              <v-icon>mdi-cart</v-icon>
            </v-badge>
            <v-icon v-else>mdi-cart</v-icon>
          </v-btn>
        </template>
        <span> {{$t('navbar.cartTooltip')}} </span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  created() {
    this.setCartNumber(JSON.parse(window.localStorage.getItem('cart')).length);
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('cart', ['cartNumber']),
  },
  methods: {
    ...mapMutations('cart', ['setCartNumber']),
  },
};
</script>
