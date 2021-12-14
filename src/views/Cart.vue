<template>
  <v-card>
    <v-card-title>
      {{$t('cart.title')}}
    </v-card-title>
    <v-card-text>

    <v-data-iterator
        :items="mangasCart"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card elevation="10">
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    {{ $t('cart.price', {price: item.price}) }}
                  </v-list-item>
                  <v-list-item>
                    {{ $t('cart.stock', {stock: item.stock}) }}
                  </v-list-item>
                  <v-list-item-action>
                    <v-btn @click="delete1Item(item)" color="error">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
      <v-card-actions>
        <v-btn @click="deleteCart" color="success">Payer</v-btn>
        <v-spacer/>
        <v-btn @click="deleteCart" color="error">Vider mon panier</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  created() {
    this.updateCart();
  },
  data() {
    return {
      mangasCart: [],
    };
  },
  computed: {
    ...mapState('mangas', ['mangas']),
  },
  methods: {
    ...mapActions('mangas', ['fetchMangas']),
    ...mapMutations('cart', ['removeCartNumber', 'setCartNumber']),
    deleteCart() {
      if (window.localStorage.getItem('cart')) {
        window.localStorage.removeItem('cart');
      }
      this.mangasCart = [];
      this.setCartNumber(0);
    },
    delete1Item(item) {
      if (window.localStorage.getItem('cart')) {
        window.localStorage.setItem('cart', JSON.stringify(JSON.parse(window.localStorage.getItem('cart')).filter((el) => el.id !== item.id)));
      }
      this.removeCartNumber();
      this.mangasCart = this.mangasCart.filter((el) => el.id !== item.id);
    },
    async updateCart() {
      if (window.localStorage.getItem('cart')) {
        this.mangasCart = JSON.parse(window.localStorage.getItem('cart'));
      }
    },
  },
};
</script>

<style>

</style>
