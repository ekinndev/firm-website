import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: 'TR',
        showModal: false,
        user: null,
        loading: false,
    },
    actions: {
        async login({ commit }, data) {
            commit('toggleLoading');
            const asyncTimeout = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                    }, 2000);
                });
            };
            await asyncTimeout();
            commit('setUser', data);
            commit('toggleLoading');
        },
        logout({ commit }) {
            commit('logout');
        },
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
        setUser(state, user) {
            state.user = user;
        },
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        logout(state) {
            state.user = null;
        },
    },
    modules: {},
});
