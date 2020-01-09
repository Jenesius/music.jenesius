"use strict";
import Track from "./Track.js";
import List from "./List.js";

class Player{

    constructor(){
        this._track = new Track();
        this._list = new List();

        this._pos = 0;
    }
    setList(list) {
        this._list.set(list);
    }
    setTrack(pos) {
        this._track.set(this.getTrack(pos));
    }
    getTrack(pos) {
        if(this._list.length === 0){
            return {
                info:{},
            };
        }
        return this._list.get()[pos];
    }
    getList(){
        return this._list.get();

    }
    activate() {
        if (this._track.paused){
            this._track.play();
        }else {
            this._track.pause();
        }
    }
    play(){
        this._track.play();
    }
    pause(){
        this._track.pause();
    }

    get track(){
        return this._track;
    }

    next(){
        this._pos = this._pos + 1;
    }
    prev(){
        this._pos = this._pos - 1;
    }

    get index(){
        return this._pos;
    }
}
export default new Player();