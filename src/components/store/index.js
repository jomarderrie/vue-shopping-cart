import authModule from "./auth/index.js";
import cartModule from "./cart/index.js";
import {createStore} from "vuex";

const store = createStore({
	modules:{
		auth:authModule,
		cart:cartModule
	}
})

export default store;