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
        <span class="text-caption">Home</span>
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
        <span>Store</span>
      </v-tooltip>
      <v-spacer />
      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/Cart"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <span>Cart</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/Account"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <span>Account</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template  v-slot:activator="{on, attrs}">
          <v-btn to="/logout"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Disconnect</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
