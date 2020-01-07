export default function ApiVK(){
    //get link, return userID
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
                resolve(e);
            })
            .catch(e => {
                reject(e);
            })
        })
    };
}