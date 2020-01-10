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
        let trackActive = !this.track.paused;


        this._pos = pos;
        this._track.set(this.getTrack(pos));

        //Если трек был активен, то новый наследует его значене
        if (trackActive){
            this.play();
        }


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



        let pos = this._pos + 1;

        this.setTrack(pos);
    }
    prev(){

        //Если Время проигрывания трека < 5 секунд, трек начинается сначала,
        //без перехода на предыдущий
        if (this.track.currentTime > 10){
            this.track.currentTime = 0;
            return;
        }

        let pos = this._pos - 1;

        this.setTrack(pos);
    }
    loop(){
        this.track.loop = !this.track.loop;
    }

    get index(){
        return this._pos;
    }
}
export default new Player();