"use strict";
//state
const state = {
    activeMainView:""
};

//getters
const getters = {

};

//actions
const actions = {};

//mutations
const mutations = {
    setActiveMainView: function(state, path){
        state.activeMainView = path;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}