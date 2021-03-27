import authActions from "./actions.js";
import authGetters from "./getters.js";
import authMutations from "./mutations.js";

export default{
	state() {
		return {
 isLoggedIn: false
		};
	},
	mutations: authMutations,
	actions: authActions,
	getters: authGetters
}