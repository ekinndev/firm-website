import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import translationsEn from './locales/en';
import translationsTr from './locales/tr';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;
Vue.use(VueI18n);

Vue.component('v-select', vSelect);

const messages = {
    EN: {
        message: {
            ...translationsEn,
        },
    },
    TR: {
        message: {
            ...translationsTr,
        },
    },
};

const i18n = new VueI18n({
    locale: 'TR', // set locale
    messages, // set locale messages
});

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app');

export default i18n;
