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
        return this._list.get()[pos];
    }
    currentTrack(){
        return this.getTrack(this._pos);
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


    next(){
        this._pos = this._pos + 1;
    }
    prev(){
        this._pos = this._pos - 1;
    }
}
export default new Player();