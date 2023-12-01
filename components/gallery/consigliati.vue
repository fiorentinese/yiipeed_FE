<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { consigliatiStore } from '../../stores/Consigliati';
const modules = [Autoplay, Navigation];
//
const screenWidth = ref('');
const getElement = () => {
	let elements;

	if (parseInt(screenWidth.value) < 600) {
		elements = 1;
	} else if (parseInt(screenWidth.value) < 1024) {
		elements = 2;
	} else if (parseInt(screenWidth.value) < 1920) {
		elements = 4;
	} else {
		elements = 5;
	}

	return elements;
};

onMounted(async () => {
	screenWidth.value = window.innerWidth;
	await consigliatiStore().getConsigliati();
	//console.dir(consigliatiStore().getItems);
});
</script>

<template>
	<v-container v-if="consigliatiStore().getItems.length > 0" fluid>
		<h3 class="title">Yipeed consiglia..</h3>
		<swiper
			:slides-per-view="getElement()"
			:space-between="20"
			:autoHeight="true"
			:spaceBetween="20"
			:centeredSlides="false"
			:loop="true"
			:navigation="true"
			:modules="modules"
			:autoplay="{
				delay: 3500,
				disableOnInteraction: false,
			}"
			class="pl-2 pr-2 pt-1 pb-1"
		>
			<swiper-slide v-for="item in consigliatiStore().getItems" :key="item._id">
				<v-sheet class="pa-4 mx-auto elevation-1">
					<ItemsPreview :item="item"></ItemsPreview>
				</v-sheet>
			</swiper-slide>
		</swiper>
	</v-container>
</template>

<style scoped></style>
