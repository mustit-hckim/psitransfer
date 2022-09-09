import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        adUser: '',
        adLogin: false,

    },
    getters: {
        adUser: (state, getters) => {
            return state.adUser
        },
        adLogin: (state, getters) => {
            return state.adLogin
        }
    },

    mutations: {
        ADLOGIN(state, msg) {
            state.adUser = msg;
            state.adLogin = true;
        },
        ADLOGOUT(state, msg) {
            state.adUser = '';
            state.adLogin = false;
        },
    }
})