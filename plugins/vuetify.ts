//import '@mdi/font/css/materialdesignicons.css';
//import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/*const myTheme: ThemeDefinition = {
	colors: {},
};*/
export default defineNuxtPlugin(app => {
	const vuetify = createVuetify({
		components,
		directives,
		ssr: true,
	});
	app.vueApp.use(vuetify);
});
