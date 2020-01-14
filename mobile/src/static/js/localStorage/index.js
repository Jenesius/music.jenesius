"use strict";

import store from "../../../store/";

export default new class localStorage{
    get userVkID (){
        return window.localStorage.getItem('userVkID');
    }
    set userVkID (userID){
        let input = Number(userID);
        if(Number.isInteger(input)) {
            window.localStorage.setItem('userVkID', input);
            store.commit('vk/setUserID', input);
        }
    }
}