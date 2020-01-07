"use strict";

export default class Track extends Audio{
    set(_obj){

        this.src = _obj.info.urlTrack;
    }
}