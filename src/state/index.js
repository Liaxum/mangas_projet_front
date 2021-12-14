import Vue from 'vue';
import Vuex from 'vuex';

import * as mangas from './mangas';
import * as cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mangas,
    cart,
  },
});
