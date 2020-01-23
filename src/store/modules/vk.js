 "use strict";

import localStorage from '../../static/js/localStorage';

//Получение id из URL, и замена URL без кеша
//Вынести за пределы Storage
let _tmp = window.location.search.substr(1).slice(window.location.search.substr(1).indexOf('=') + 1);
if(_tmp){
     window.localStorage.setItem('userVkID', _tmp);
     window.location = window.location.origin + window.location.pathname;
 }

//init state
const state = {
    userID:localStorage.userVkID,
    global:{
        pages:{
            count:-1,
            current:Number,
        },
    },
    filterStr:"",
    position:{
        isOnline:Boolean,
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