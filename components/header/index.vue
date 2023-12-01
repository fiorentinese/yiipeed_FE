<script setup>
import logo from '@/assets/images/logo.svg';
const gotohome = async () => {
	await navigateTo('/');
};
</script>
<template>
	<div>
		<v-app-bar :elevation="0">
			<v-app-bar-title class="text-center"
				><v-img height="50" :src="logo" @click="gotohome" />
				<!--				<v-btn variant="plain" to="/"> <v-img height="300" src="@/assets/logo.svg" /> </v-btn>-->
			</v-app-bar-title>
		</v-app-bar>
	</div>
</template>
