"use strict";
//init state
const state = {
    userID:Number,
    music:{
        online:[],
        offline:[],
    },
};

//getters
const getters = {
    getOnline: (state)=>{
        return state.music.online;
    }
};

//actions
const actions = {};

//mutations
const mutations = {
    setUserID(state, id){
        state.userID = id;
    },
    setOnline(state, list){
        state.music.online.concat(list);
    },
    setOfflineVK(state, list){
        state.music.offline.concat(list);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}