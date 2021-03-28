export default{
	products(state){
		return state.cart.items;
	},
	totalSum(state){
		return state.cart.total.toFixed(2);
	},
	quantity(state){
		return state.cart.qty;
	}
}