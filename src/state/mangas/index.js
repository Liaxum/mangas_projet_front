/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import { getMangas, editManga, addManga, deleteManga } from '../../api/mangas';

export const namespaced = true;

export const state = {
  mangas: [],
};

export const mutations = {
  setMangas(state, data) {
    state.mangas = data;
  },
  addManga(state, data) {
    state.mangas.push(data);
  },
};

export const actions = {
  async fetchMangas({ commit }, id = '') {
    const res = await getMangas(id);
    return commit('setMangas', res);
  },
  async editManga(context, { id, createdAt, name, price, description, stock, image }) {
    await editManga(id, createdAt, name, price, description, stock, image);
  },
  async addManga({ dispatch }, { createdAt, name, price, description, stock, image }) {
    await addManga(createdAt, name, price, description, stock, image);
    return dispatch('fetchMangas');
  },
  async deleteManga(context, { id }) {
    await deleteManga(id);
  },
};
