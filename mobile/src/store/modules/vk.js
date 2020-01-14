 "use strict";

import Player from '../../static/js/player';
import Router from '../../router';

//init state
const state = {
    userID:Number,
    global:{
        pages:{
            count:Number,
            current:Number,
        },
    },
    filterStr:"",
    position:{
        isOnline:Boolean,
        isPlayer:false,
    },
    music:{
        online:[],
        offline:[],
    },
};

//getters
const getters = {
    getOnline(state){
        let tmp = state.filterStr.toLowerCase();
        return state.music.online.filter((elem) => {
            if(state.filterStr === ""){
                return true;
            }
            if (elem.info.title.toLowerCase().indexOf(tmp) === -1 && elem.info.artist.toLowerCase().indexOf(tmp) === -1){
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
    setPagesCount(state, count){
        state.global.pages.count = count;
    },
    setCurrentPages(state, count){
      state.global.pages.current = count;
    },
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

        if (tmp === true){
            Router.push('/vk/player');
        }else{
            if (Router.history.current.path === '/vk/player'){
                Router.back();
            }
        }

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
        state.music.online = state.music.online.concat(list);
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