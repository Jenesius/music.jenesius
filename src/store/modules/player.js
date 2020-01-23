"use strict";
//state
const state = {
    isActive: false,
    position: Number,
    currentTime: 0,
};

//getters
const getters = {
    srcIsActive: function(state){
        let src ="/img/ico/audio/pause.svg";
        if(!state.isActive){src = "/img/ico/audio/play.svg"}

        return src;
    },
};

//actions
const actions = {};

//mutations
const mutations = {
    setActivate:function(state, value){
        state.isActive = value;
    },
    setPosition:function(state,position){
        state.position = position;
    },
    setCurrentTime:function (state, time) {
        state.currentTime = time;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}