"use strict";
import Track from "./Track.js";
import List from "./List.js";

import controller from "./controller";

class Player{

    constructor(){
        this._track = new Track();
        this._list = new List();

        this._pos = 0;
        this._random = false;

        this.track.addEventListener('ended', () => {
            this.next();
            this.play();
        });
        this.track.addEventListener('pause', () => {

            controller.setActivate(!this.track.paused);
        });
        this.track.addEventListener('play', () => {
            controller.setActivate(!this.track.paused);
        });
        this.track.addEventListener('timeupdate', () => {
            controller.setCurrentTime(this.currentTime);
        })

    }
    //Заменяет треклист полученным
    setList(list) {
        this._list.set(list);
    }
    //Добавляет в конец полученный плейлист
    addList(list) {
        this._list.add(list);
    }

    getList(){
        return this._list.get();
    }

    get position(){
        return this._pos;
    }
    set position(value){
        this._pos = value;

        controller.setPosition(this.position);
    }


    setTrack(pos) {
        let trackActive = !this.track.paused;


        this.position = pos;

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
        let pos = this.position + 1;

        this.setTrack(pos);
    }
    prev(){

        //Если Время проигрывания трека < 5 секунд, трек начинается сначала,
        //без перехода на предыдущий
        if (this.currentTime > 10){
            this.currentTime = 0;
            return;
        }

        let pos = this.position - 1;

        this.setTrack(pos);
    }
    loop(){
        this.track.loop = !this.track.loop;
    }

    set currentTime(time){
        this.track.currentTime = time;
    }
    get currentTime(){
        return this.track.currentTime;
    }

    isLoop(){
        return this.track.loop;
    }
    isRandom(){
        return this._random;
    }

}
export default new Player();