<template>
  <v-card>
    <v-card-title>
      {{ $t('store.title') }}
    </v-card-title>
    <v-card-text>
      <v-data-iterator
        :items="filteredItems"
      >
      <template v-slot:header>
          <v-toolbar
            dark
            class="mb-1"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer/>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="Object.keys(keys)"
                prepend-inner-icon="mdi-magnify"
                label="Sort by"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle
                v-model="sortDesc"
                mandatory
                disable
              >
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card elevation="10">
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>

                <v-divider/>

                <v-list dense>
                  <v-list-item>
                    {{ $t('store.price', {price: item.price}) }}
                  </v-list-item>
                  <v-list-item>
                    {{ $t('store.stock', {stock: item.stock}) }}
                  </v-list-item>
                  <v-list-item-action>
                    <v-btn @click="moreDialog = true; pushItem= item">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
    <MoreInfoProduit
      v-if="moreDialog"
      :dialog.sync="moreDialog"
      :mangas="pushItem"
    />
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MoreInfoProduit from '@/components/MoreInfoProduit.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Stores',
  async created() {
    await this.fetchMangas();
    this.mangasList = this.mangas;
  },
  data() {
    return {
      moreDialog: false,
      search: '',
      pushItem: '',
      sortBy: '',
      sortDesc: '',
      mangasList: [],
      keys: {
        Prix: 'Prix',
        Stock: 'Stock',
        Nom: 'Nom',
      },
    };
  },
  computed: {
    ...mapState('mangas', ['mangas']),
    filteredItems() {
      const nonSortedItems = this.search
        ? this.mangasList.filter((el) => el.name.includes(this.search)) : this.mangasList;
      return nonSortedItems.sort((a, b) => {
        // eslint-disable-next-line default-case
        switch (this.sortBy) {
          case 'Prix':
            return this.sortDesc ? b.price - a.price : a.price - b.price;
          case 'Stock':
            return this.sortDesc ? b.stock - a.stock : a.stock - b.stock;
          case 'Nom':
            return this.sortDesc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
          default:
            return a - b;
        }
      });
    },
  },
  methods: {
    ...mapActions('mangas', ['fetchMangas', 'editMangas']),
  },
  components: {
    MoreInfoProduit,
  },
};
</script>

<style>

</style>
