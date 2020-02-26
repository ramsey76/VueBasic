import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false;

Vue.use(Vuetify)
 
const opts = {
 theme: { disable: false }
}


new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify(opts),
}).$mount('#app');
