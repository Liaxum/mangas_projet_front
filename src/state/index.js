import Vue from 'vue';
import Vuex from 'vuex';

import * as mangas from './mangas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mangas,
  },
});
