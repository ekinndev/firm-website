import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: 'TR',
        showModal: false,
        loading: false,
    },
    mutations: {
        changeLanguage(state) {
            if (state.lang === 'TR') {
                state.lang = 'EN';
                i18n.locale = 'EN';
            } else {
                state.lang = 'TR';
                i18n.locale = 'TR';
            }
        },
        toggleLoading(state) {
            state.loading = !state.loading;
        },
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
    },
    actions: {},
    modules: {},
});
