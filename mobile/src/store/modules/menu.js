"use strict";
//state
const state = {
    isActive: false,
};

//getters
const getters = {

};

//actions
const actions = {};

//mutations
const mutations = {
    test(state){
        state.isActive = false;
    },
    setActive(state, tmp){

        state.isActive = tmp;

    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}