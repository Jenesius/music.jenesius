"use strict";
//init state
const state = {
    userID:Number,
    filterStr:"",
    position:{
        isOnline:Boolean,
        index:Number,
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
        return state.music.online.filter((elem) => {
            if(state.filterStr === ""){
                return true;
            }
            if (elem.info.title.indexOf(state.filterStr) === -1 && elem.info.artist.indexOf(state.filterStr) === -1){
                return false;
            }

            return true;
        })
    }
};

//actions
const actions = {};

//mutations
const mutations = {

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