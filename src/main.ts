import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Loading, MessageBox, Message, Notification, Dialog } from 'element-ui';
import VueGlobal from '@/utils/global';
import './permission';
import './styles/animate.css';
import 'normalize.css';
import './assets/css/font-awesome.min.css';

import './styles/index.scss';

Vue.use(VueGlobal);
Vue.use(Loading.directive);
Vue.use(Dialog);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
