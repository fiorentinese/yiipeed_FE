<script setup lang="ts">
import localizzaAffare from '@/assets/images/search/localizzaAffare.svg';
import cercaBrand from '@/assets/images/search/cercaBrand.svg';
import cercaFoto from '@/assets/images/search/cercaFoto.svg';
import cercaScreenshot from '@/assets/images/search/cercaScreenshot.svg';
import occasioniOggi from '@/assets/images/search/occasioniOggi.svg';
import novita from '@/assets/images/search/novita.svg';
import pacchettiRisparmio from '@/assets/images/search/pacchettiRisparmio.svg';
import ideeRegalo from '@/assets/images/search/ideeRegalo.svg';
</script>

<template>
	<v-sheet class="mx-auto">
		<v-slide-group show-arrows cycle>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="localizzaAffare" style="width: 50px" />

					<p>Localizza l'affare</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="cercaBrand" style="width: 50px" />
					<p>Cerca per Brand</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="cercaFoto" style="width: 50px" />
					<p>Cerca con una foto</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="cercaScreenshot" style="width: 50px" />
					<p>Cerca con uno screenshot</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="occasioniOggi" style="width: 50px" />
					<p>Occasioni di oggi</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="novita" style="width: 50px" />
					<p>Novità</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="pacchettiRisparmio" style="width: 50px" />
					<p>Pacchetti risparmio</p>
				</div>
			</v-slide-group-item>
			<v-slide-group-item>
				<div class="d-flex fill-height align-center justify-center flex-column ml-5 mr5">
					<img :src="ideeRegalo" style="width: 50px" />
					<p>Idee regalo</p>
				</div>
			</v-slide-group-item>
		</v-slide-group>
	</v-sheet>
</template>

<style scoped></style>
