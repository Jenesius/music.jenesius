export default new class Cash{
    async add(cacheObj, file){
        let response = await fetch(file.url);

        if(response.ok){
            caches.open(cacheObj.name)
                .then(function(cache){

                    let name = file.title + '_' + file.artist + '_' + file.duration;

                    // eslint-disable-next-line no-console
                    console.log(name);

                    return cache.put(name, response);
                });

            return 'Done!!';
        }

        // eslint-disable-next-line no-console
        console.log('__');
    }

    getMusicList(cacheObj){

        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
            caches.open(cacheObj.name)
                .then(function(cache){
                    cache.keys()
                        .then(function(keyList){
                            resolve (keyList);
                        })
                });
        })
    }
}