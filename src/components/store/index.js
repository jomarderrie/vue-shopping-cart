import authModule from "./auth/index.js";
import cartModule from "./cart/index.js";
import {createStore} from "vuex";
import productsModule from "./products.js";

const store = createStore({
	modules:{
		auth:authModule,
		cart:cartModule,
		products:productsModule 
	}
	,
	state() {
		return {
  isLoggedIn: false
		};
	},
	mutations: {
		login(state) {
  state.isLoggedIn = true;
		},
		logout(state) {
  state.isLoggedIn = false;
		},
	},
 actions: {
	login(context) {
  context.commit('login');
		},
		logout(context) {	  context.commit('logout');
		},
	},
	getters: {
		isAuthenticated(state) {
  return state.isLoggedIn;
}
 }
})

export default store;