export default function Time(str) {

    function object() {}

    object._str = str;

    object.modifyDuration = function () {
        let _min = Math.floor(this._str / 60);
        let _sec = Math.floor(this._str - _min * 60);
        if(_sec < 10)_sec = '0' + _sec;
        return (_min) + ':' + (_sec);
    };

    return object;

}