import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './permission';
import './styles/animate.css';
import 'normalize.css';
import 'swiper/dist/css/swiper.css';
import './assets/css/font-awesome.min.css';

import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
