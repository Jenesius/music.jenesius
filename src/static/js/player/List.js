"use strict";

export default class AudioList{
    constructor(){
        this._arr = [];
    }

    //Установить текущий плэйлист
    set (list){
        this._arr = list;
    }
    add (list){
        this._arr = this._arr.concat(list);
    }
    get (){
        return this._arr;
    }
    get length(){
        return this._arr.length;
    }
}