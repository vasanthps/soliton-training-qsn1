(function(inputStr) {
    'use strict';

    function toNumber(arr) {
        return arr.map(function(elem) {
            return Number(elem);
        });
    }

    inputArr = inputStr.split("...");
    output = toNumber(inputArr.shift().split(","));
    // console.log(inputArr, output);
    output = inputArr.reduce(function(data, seq) {
        // console.log("dataI: ",data);
        var start = Number(data[data.length-1]);
        var seqArr = seq.split(",");
        var end = Number(seqArr[0]);
        // console.log(start, end, seq);
        // add missing numbers
        var elem = start+1;
        while(elem < end) {
            data.push(elem);
            ++elem;
        }
        // console.log("dataO: ", data);
        // append this sequence
        return data.concat(toNumber(seqArr));
    }, output);

    console.log(output);

})("1,2,3,4,5...17,18,19...22,23,24,25");