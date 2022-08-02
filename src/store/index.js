import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist'
import linkstore from './modules/linkstore';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

const store = () =>
    new Vuex.Store({
        modules: {
            linkstore,
        },
        // also will work if you have your state, actions, mutations directly here
        plugins: [vuexLocal.plugin],
    });

export default store;
