<script setup lang="ts">
import { ricercaStore } from '~/stores/Ricerca';
</script>

<template>
	<v-container fluid v-if="ricercaStore().getItems.length > 0">
		<h3 class="title">Ricerca prodotto..</h3>
		<v-row class="d-flex">
			<v-col cols="12" sm="6" lg="2" md="3" xs="1" v-for="item in ricercaStore().getItems" :key="item._id" class="align-self-stretch">
				<v-sheet class="pa-4 mx-auto elevation-1 align-self-stretch" style="height: 100%">
					<ItemsPreview :item="item"></ItemsPreview>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped></style>
