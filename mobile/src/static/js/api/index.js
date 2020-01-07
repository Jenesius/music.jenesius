import ApiVK from "./vk";

export default new function Api(){
    let object = function () {

    };
    object.vk = new ApiVK();
    object.test = function () {
        // eslint-disable-next-line no-console
        console.log('Test Api');
    };

    return object;
}