/* eslint-disable no-shadow */
export const namespaced = true;

export const state = {
  cartNumber: 0,
};

export const mutations = {
  setCartNumber(state, data) {
    state.cartNumber = data;
  },
  addCartNumber(state) {
    state.cartNumber += 1;
  },
  removeCartNumber(state) {
    state.cartNumber -= 1;
  },
};
