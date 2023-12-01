import { defineStore } from 'pinia';
import { http } from '../http/service';
export const ricercaStore = defineStore('ricerca', {
	state: () => ({
		items: [],
	}),
	getters: {
		getItems: state => {
			return state.items;
		},
	},
	actions: {
		async getRicerca(payload) {
			const { data } = await http.post('/items/ricerca', {
				filter: payload,
			});
			const items = [];
			if (data.data.length > 0) {
				for (let el of data.data) {
					console.log(el?.image ? el?.image : el?.origin);
					items.push({
						description: el.description,
						image: el?.image ? el?.image : el?.origin,
						origin: el.origin,
						price: el.price,
						sku: el.sku,
						slug: el.slug,
						title: el.title,
						_id: el._id,
						brand: el.brand.name,
					});
				}
			}

			this.setItems(items);
		},
		setItems(value) {
			this.items = value;
		},
	},
});
