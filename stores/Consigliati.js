import { defineStore } from 'pinia';
import { http } from '../http/service';
export const consigliatiStore = defineStore('consigliati', {
	state: () => ({
		items: [],
	}),
	getters: {
		getItems: state => {
			return state.items;
		},
	},
	actions: {
		async getConsigliati() {
			const { data } = await http.post('/items/consigliati', {
				filter: {},
			});
			const items = [];
			if (data.data.length > 0) {
				for (let el of data.data) {
					let image = '';
					if (el.imagesStored.length > 0) {
						image = el.imagesStored[0];
					}
					if (!image && el.images.length > 0) {
						image = el.images[0];
					}
					items.push({
						description: el.description,
						image: image,
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
