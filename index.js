/**
*   Flat the input object to the array format
*   @param {object} obj
*   @param {array} array
*/
function flatObjToArray(obj, array = []) {
    return Object.keys(obj).reduce((result, key) => {
        if (typeof obj[key] === 'object') {
            return flatObjToArray(obj[key], result.concat(key));
        }
        return result.concat(key, obj[key]);
    }, array);
}

/**
*   Reverse the keys and values of the input object
*   @param {object} obj
*/
function reverse(obj) {
    const flat = flatObjToArray(obj, []);

    return flat.reduce((obj, value, index) => {
        if (index + 1 < flat.length) {
            const nextKey = flat[index + 1];

            return {
                [nextKey]: index === 0 ? value : obj
            };
        }
        return obj;
    }, {})
}

module.exports = { flatObjToArray, reverse };
