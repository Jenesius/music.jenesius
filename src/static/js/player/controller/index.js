import store from "../../../../store/";

class controller{
    setActivate (value){
        store.commit('player/setActivate', value);
    }
    setPosition (position){
        store.commit('player/setPosition', position);
    }
    setCurrentTime (time){
        store.commit('player/setCurrentTime', time);
    }
}

export default new controller();
