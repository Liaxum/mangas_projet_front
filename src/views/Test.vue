<template>
  <div>
    <h1> Liste des mangas </h1>
    <v-data-table :items="mangas" :headers="[
    {
      text: 'name',
      value: 'name'
    }]"></v-data-table>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  created() {
    this.fetchMangas();
  },

  data() {
    return {
    };
  },
  computed: {
    ...mapState('mangas', ['mangas']),
  },
  methods: {
    ...mapActions('mangas', ['fetchMangas']),
  },
};
</script>
