/* eslint-disable no-mixed-spaces-and-tabs */

import cartActions from "./actions.js";
import cartGetters from "./getters.js";
import cartMutations from "./mutations.js";

export default{
	namespaced:true,
	state(){
		return{
		    cart: { items: [], total: 0, qty: 0 }
		}
	}
	,mutations: cartMutations,
	actions:cartActions,
	getters:cartGetters
}