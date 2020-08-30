import Vue from 'vue';
import showAlert from '@/helpers';
import { text1, text2 } from '@/data/texts';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

showAlert(text1);
showAlert(text2);
