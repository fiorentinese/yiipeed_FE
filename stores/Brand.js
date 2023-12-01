import { defineStore } from 'pinia';
import { http } from '../http/service';
export const brandStore = defineStore('brand', {
	state: () => ({
		items: [],
	}),
	getters: {
		getItems: async state => {
			console.log('ITEMS', state.items);
			if (state.items.length === 0) {
				await brandStore().getBrand();
			}
			return state.items;
		},
	},
	actions: {
		async getBrand() {
			const { data } = await http.post('/brands', {
				filter: {},
			});

			const response = data.data.map(el => {
				if (el.active) {
					return { _id: el._id, name: el.name };
				}
			});
			this.setItems(response);
		},
		setItems(value) {
			this.items = value;
		},
	},
});
