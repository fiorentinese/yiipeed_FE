<script setup>
import { onMounted } from 'vue';
import { ricercaStore } from '~/stores/Ricerca.js';

useHead({
	title: 'Yipeed search',
});

onMounted(async () => {
	//const route = useRoute();
	//const chiaveRicerca = route.query.s;
	//await ricercaStore().getRicerca({ search: chiaveRicerca });
	//console.dir(consigliatiStore().getItems);
});
</script>

<template>
	<div>
		<v-main>
			<!--			<SearchLogo />-->
			<!--			<Search :ricerca="chiaveRicerca" />-->
			<Search />
			<FilterRicerca />
			<ItemsRicerca />
		</v-main>
	</div>
</template>

<style scoped></style>
