import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export default {
  state: {
    isLoggedIn: false
  },
  actions: authActions,
  getters: authGetters,
  mutations: authMutations
};