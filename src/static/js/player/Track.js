"use strict";

export default class Track extends Audio{
    constructor(){
        super();
        this.preload = 'auto';
    }
    set(_obj){
        this.preload = 'auto';
        this.src = _obj.info.urlTrack;
    }
}