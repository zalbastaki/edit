import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import icons from './plugins/icons';
import Siema from 'v-siema';

Vue.use(icons);
Vue.use(Siema);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');
