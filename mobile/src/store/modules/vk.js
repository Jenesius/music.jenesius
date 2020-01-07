"use strict";
//init state
const state = {
    userID:Number,
    position:{
        isOnline:Boolean,
        index:Number,
    },
    music:{
        online:[],
        offline:[],
    },
};

//getters
const getters = {
};

//actions
const actions = {};

//mutations
const mutations = {
    setPositionOnline(state, tmp){
      state.position.isOnline = tmp;
    },
    setUserID(state, id){
        state.userID = id;
    },
    setOnlineMusic(state, list){
        state.music.online = list;
    },
    setOfflineMusic(state, list){
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