import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test: null
    },
    mutations: {
        TEST_MUTATION(state, { test }) {
            state.test = test
        }
    },
    actions: {
        testAction({ commit, dispatch, getters }, { userId }) {
            console.log(userId)
        }
    },
    modules: {}
})
