import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'swiper/dist/css/swiper.css';
import './assets/css/font-awesome.min.css';
import 'animate.css';
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
