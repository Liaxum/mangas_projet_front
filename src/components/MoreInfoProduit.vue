<template>
  <v-dialog
    v-model="dialogInfo"
  >
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          {{mangas.name}}
        </v-toolbar-title>
        <v-spacer/>
        <v-btn
          @click="dialogInfo = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <div class="mt-5 mb-5">
        <v-row class="mb-5">
          {{ $t('store.dialog.description', {description: mangas.description}) }}
        </v-row>
        <v-row class="mb-5">
          {{ $t('store.dialog.date', {date: formatDate}) }}
        </v-row>
        <v-row class="mb-5">
          {{$t('store.dialog.img')}} <a :href="mangas.image">{{mangas.image}}</a>
        </v-row>
        <v-row class="mb-5">
          {{$t('store.price', {price: mangas.price})}}
        </v-row>
        <v-row class="mb-5">
          {{ $t('store.stock', {stock: mangas.stock}) }}
        </v-row>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addToCart" color="primary">
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn @click="dialogInfo = false" text color="error">{{$t('btn.close')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
import moment from 'moment';
import 'moment/locale/fr';

export default {
  name: 'MoreInfoProduit',
  props: {
    dialog: { type: Boolean, required: true },
    mangas: { type: Object, required: true },
  },
  computed: {
    dialogInfo: {
      get() {
        return this.dialog;
      },
      set(val) {
        this.$emit('update:dialog', val);
      },
    },
    formatDate() {
      moment().local('fr');
      return moment(this.mangas.createdAt).format('LL');
    },
  },
  methods: {
    ...mapMutations('cart', ['addCartNumber']),
    addToCart() {
      if (window.localStorage.getItem('cart')) {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.push(this.mangas);
        window.localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        window.localStorage.setItem('cart', JSON.stringify([this.mangas]));
      }
      this.dialogInfo = false;
      this.addCartNumber();
    },
  },
};
</script>

<style>

</style>
