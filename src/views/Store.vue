<template>
  <v-card>
    <v-card-title>
      {{ $t('store.title') }}
    </v-card-title>
    <v-card-text>
      <v-data-iterator
        :items="mangasList"
      >
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
      pushItem: '',
      mangasList: [],
    };
  },
  computed: {
    ...mapState('mangas', ['mangas']),
    filteredKeys() {
      return 'HEy';
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
