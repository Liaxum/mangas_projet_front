<template>
  <div>
    <h1> Liste des mangas </h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>createdAt</th>
          <th>Price</th>
          <th>description</th>
          <th>stocks</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mangas" :key="item.id">
          <td> {{item.nama}} </td>
          <td> {{item.createdAt}} </td>
          <td> {{item.price}} </td>
          <td> {{item.description}} </td>
          <td> {{item.stocks}} </td>
          <td> {{item.image}} </td>
        </tr>
      </tbody>
    </table>
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
      test: this.$t('test'),
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
