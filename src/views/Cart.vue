<template>
  <v-card>
    <v-card-title>
      Votre panier
    </v-card-title>
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
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    Prix : {{item.price}} €
                  </v-list-item>
                  <v-list-item>
                    Il reste {{ item.stock}}
                  </v-list-item>
                  <v-list-item-action>
                    <v-btn @click="delete1Item(item)" color="red">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
      <v-card-actions>
        <v-btn @click="deleteCart" color="success">Payer</v-btn>
        <v-spacer/>
        <v-btn @click="deleteCart" color="error">Vider mon panier</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
    deleteCart() {
      if (window.localStorage.getItem('cart')) {
        window.localStorage.removeItem('cart');
      }
      this.mangasCart = [];
    },
    delete1Item(item) {
      if (window.localStorage.getItem('cart')) {
        window.localStorage.setItem('cart', JSON.stringify(JSON.parse(window.localStorage.getItem('cart')).filter((el) => el !== item.id)));
      }
      this.mangasCart = this.mangasCart.filter((el) => el.id !== item.id);
    },
    async updateCart() {
      if (window.localStorage.getItem('cart')) {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.forEach(async (id) => {
          await this.fetchMangas(id);
          this.mangasCart.push(this.mangas);
        });
      }
    },
  },
};
</script>

<style>

</style>
