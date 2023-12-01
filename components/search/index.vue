<script setup>
import { ricercaStore } from '~/stores/Ricerca.js';

const s = ref('');
const search = async () => {
	await ricercaStore().getRicerca({ search: s.value });
	const { currentRoute } = useRouter();
	const routeName = currentRoute.value.name;
	console.log(routeName);
	if (routeName !== 'search') {
		await navigateTo({
			path: '/search',
			query: {
				s: s.value,
			},
		});
	}
};
</script>

<template>
	<v-container fluid>
		<v-row justify="center">
			<v-col cols="12" sm="8">
				<v-text-field v-model="s" label="Cerca tutto ciò che desideri" color="#2e6fb6" variant="outlined" append-inner-icon="mdi-magnify" @click:append-inner="search()"></v-text-field>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" sm="8">
				<SearchSubmenu />
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped></style>
