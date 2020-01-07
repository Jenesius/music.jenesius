import unMask from "./../../unMask";

export default function ApiVK(){
    //get link, return userID

    function transfromObject(songs, urlKey){
        let newArr = [];

        songs.forEach(function (song, i) {
            let downloadFileName = song.artist + '-' + song.title + '-kissvk.com.mp3';
            // eslint-disable-next-line no-useless-escape
            downloadFileName = downloadFileName.replace(/[\\!\*"'\(\);:@&=\+\$,/\?%#\[\]]/gm, '-');

            let futureDownloadUrls = [];
            for (let j = i + 1; ((j < songs.length) && (j < i + 10)); j++) {
                if ((!!songs[j].url) && (songs[j].url.indexOf('sid://') === 0)) {
                    futureDownloadUrls.push(songs[j].url);
                }
            }

            let xx = unMask(song.url, urlKey);

            song.downloadUrl = 'https://i12.kissvk.com' +
                '/api/song/download/get/10/' +
                encodeURIComponent(downloadFileName) +
                '?origin=kissvk.com' +
                '&url=' + encodeURIComponent(xx) +
                '&artist=' + encodeURIComponent(song.artist) +
                '&title=' + encodeURIComponent(song.title) +
                '&index=' + encodeURIComponent(song.index) +
                '&future_urls=' + encodeURIComponent(futureDownloadUrls.join(','));


            newArr.push({
                info: {
                    title: song.title,
                    artist: song.artist,
                    duration: song.duration,
                    urlImage: song.vkAlbumPictureUrl,
                    urlTrack: song.downloadUrl,
                },
                isDownload: false,
                index:i,
            });
        });
        return  newArr;
    }

    this._id = 115080501;

    this.getUserID = function(){};
    this.getUserMusic = function(){
        return new Promise((resolve, reject) => {
            fetch("https://api-music.jenesius.com/songs/" + this._id + "/0", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(e => {
                // eslint-disable-next-line no-console
                return e.json();
            })
            .then(e => {
                resolve(transfromObject(e.songs, e.vkUserId));

            })
            .catch(e => {
                reject(e);
            })
        })
    };
}