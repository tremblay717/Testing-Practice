const analyseArray = function (array) {

    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    let min = undefined;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min || min == undefined) {
            min = array[i];
        }
    }
    
    let max = undefined;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max || max == undefined) {
            max = array[i];
        }
    }


    const object = {
        sum: total,
        minimum: min,
        maximum: max,
        average: total / array.length,
        length: array.length,
    }
    return object
}

module.exports = analyseArray;