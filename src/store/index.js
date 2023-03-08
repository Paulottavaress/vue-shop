import { createStore } from "vuex";
import authModule from './auth/index';
import cartModule from './cart/index';

const store = createStore({
  modules: {
    auth: authModule,
    cart: cartModule
  }
});

export default store;