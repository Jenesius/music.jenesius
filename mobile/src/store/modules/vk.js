"use strict";

import Player from '../../static/js/player';

//init state
const state = {
    userID:Number,
    filterStr:"",
    position:{
        isOnline:Boolean,
        index:Number,
        isPlayer:false,
    },
    player:{
        timerTimeLine:Number,
        isActive: false,
    },
    music:{
        online:[],
        offline:[],
    },
};

//getters
const getters = {
    getOnline(state){
        return state.music.online.filter((elem) => {
            if(state.filterStr === ""){
                return true;
            }
            if (elem.info.title.indexOf(state.filterStr) === -1 && elem.info.artist.indexOf(state.filterStr) === -1){
                return false;
            }

            return true;
        })
    },
    getIsActive: function(state){

        let src;
        if(state.player.isActive){src = "/img/ico/audio/pause.svg"}
            else{ src = "/img/ico/audio/play.svg"}
        return {
            isActive:state.player.isActive,
            src:src,
        };
    }
};

//actions
const actions = {};

//mutations
const mutations = {
    activatePlayer(state){
        state.player.isActive = !state.player.isActive;
    },
    setTimerTimeLine(state, idTimer){
        state.player.timerTimeLine = idTimer;
    },
    updatePositionIndex(state){
        state.position.index = Player.index;
    },
    updateFilter(state, tmp){
        state.filterStr = tmp;
    },
    setPositionPlayer(state, tmp){
        state.position.isPlayer = tmp;
    },
    setPositionOnline(state, tmp){
      state.position.isOnline = tmp;
    },
    setPositionIndex(state, tmp){
        state.position.index = tmp;
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