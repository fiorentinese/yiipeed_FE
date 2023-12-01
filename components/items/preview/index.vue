<script setup>
const props = defineProps({
	item: Object,
});
</script>

<template>
	<div>
		<v-img :src="item.image"></v-img>
		<p class="colorPrimary text-left mt-3 mb-1 font14">{{ item?.brand }}</p>
		<p class="">
			<nuxt-link class="primary" :to="item.slug">{{ item.title }}</nuxt-link>
		</p>
		<p class="font12">
			{{ item?.sku }}
		</p>
	</div>
</template>

<style scoped></style>
