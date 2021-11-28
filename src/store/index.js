import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: null
    },
    getters: {
        getMessage(state) {
            return state.message;
        }
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload;
        }
    },
    actions: {
        setMessage({commit},payload){
            commit('setMessage',payload)
        }
    }
})