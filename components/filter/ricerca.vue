<script setup lang="ts">
import { ricercaStore } from '~/stores/Ricerca';
const brands = ref([]);
import { onMounted } from 'vue';
import { brandStore } from '~/stores/Brand';
onMounted(async () => {
	brands.value = await brandStore().getItems;

	//console.dir(consigliatiStore().getItems);
});
</script>

<template>
	<v-container fluid>
		<v-row class="d-flex">
			<v-col cols="12" sm="4">
				<v-autocomplete :items="brands" item-value="_id" item-title="name" label="Brand" density="compact" variant="outlined" multiple hide-details> </v-autocomplete>
			</v-col>
			<v-col cols="12" sm="4"> b </v-col>
			<v-col cols="12" sm="4"> c </v-col>
		</v-row>
	</v-container>
</template>

<style scoped></style>
