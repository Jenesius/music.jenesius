"use strict";
import Track from "./Track.js";
import List from "./List.js";

export default function Player(){

    let object = function(){
        this._track = new Track();
        this._list = new List();
    };

    object.activate = function(){
        if (this._track.paused){
            this._track.play();
        }else {
            this._track.pause();
        }
    };
    object.play = function(){
        this._track.play();
    };
    object.pause = function(){
        this._track.pause();
    };


    return object;
}