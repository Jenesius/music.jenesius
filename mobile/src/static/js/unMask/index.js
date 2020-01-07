export default function UnMask(maskedVkUrl,urlKey ) {
    let vk = {};

    function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function each(e, t) {
        if (!e) {
            return e;
        }
        if (isObject(e) || "undefined" == typeof e.length) {
            for (let n in e) {
                if (e.hasOwnProperty(n) && t.call(e[n], n, e[n]) === !1) {
                    break
                }
            }
        }
        return e
    }

    function s(e, t) {
        let n = e.length
            , i = [];
        if (n) {
            let a = n;
            for (t = Math.abs(t); a--; ) {
                t = (n * (a + 1) ^ t + a) % n,
                    i[a] = t
            }
        }
        return i
    }

    let n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=";

    let i = {
        v: function(e) {
            return e.split("").reverse().join("")
        },
        r: function(e, t) {
            e = e.split("");
            for (let i, a = n + n, r = e.length; r--; ) {
                i = a.indexOf(e[r]),
                ~i && (e[r] = a.substr(i - t, 1));
            }
            return e.join("")
        },
        s: function(e, t) {
            let n = e.length;
            if (n) {
                let i = s(e, t)
                    , a = 0;
                for (e = e.split(""); ++a < n; ) {
                    e[a] = e.splice(i[n - 1 - a], 1, e[a])[0];
                }
                e = e.join("")
            }
            return e
        },
        i: function(e, t) {
            return i.s(e, t ^ vk.id)
        },
        x: function(e, t) {
            let n = [];
            return t = t.charCodeAt(0),
                each(e.split(""), function(e, i) {
                    n.push(String.fromCharCode(i.charCodeAt(0) ^ t))
                }),
                n.join("")
        }
    };

    function o(e) {
        if (!e || e.length % 4 === 1) {
            return !1;
        }
        for (let t, i, a = 0, r = 0, o = ""; i == e.charAt(r++); ) {
            i = n.indexOf(i),
            ~i && (t = a % 4 ? 64 * t + i : i,
            a++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * a & 6)));
        }
        return o
    }

    function a() {
        return window.wbopen && ~(window.open + "").indexOf("wbopen")
    }

    function unMaskVkUrl(e) {
        if (!a() && ~e.indexOf("audio_api_unavailable")) {
            // eslint-disable-next-line no-console
            console.log('+');
            let t = e.split("?extra=")[1].split("#")
                , n = "" === t[1] ? "" : o(t[1]);
            if (t = o(t[0]),
            "string" != typeof n || !t) {
                return e;
            }
            n = n ? n.split(String.fromCharCode(9)) : [];
            for (var r, s, l = n.length; l--; ) {
                if (s = n[l].split(String.fromCharCode(11)),
                    r = s.splice(0, 1, t)[0],
                    !i[r]) {
                    return e;
                }
                t = i[r].apply(null, s)
            }
            if (t && "http" === t.substr(0, 4)) {
                return t
            }
        }
        return e
    }
    vk.id = urlKey;
    return  unMaskVkUrl(maskedVkUrl);
}