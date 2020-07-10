import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import masonry from "./plugins/masonry";

Vue.config.productionTip = false;


new Vue({
  masonry,
  vuetify,
  render: h => h(App)
}).$mount('#app');
