import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import icons from './plugins/icons';
import Siema from 'v-siema';
import VueMq from 'vue-mq';

Vue.use(icons);
Vue.use(Siema);

Vue.use(VueMq, {
    breakpoints: {
        mobile: 700,
        tablet: 1100,
        desktop: Infinity,
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');
