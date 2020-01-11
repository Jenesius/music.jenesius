"use strict";
//state
const state = {
    message:String
};

//getters
const getters = {

};

//actions
const actions = {};

//mutations
const mutations = {
    setMessage:function (state, str) {
        state.message = str;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}