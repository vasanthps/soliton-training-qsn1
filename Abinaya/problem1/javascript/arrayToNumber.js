function stringToArray() {
    var splitString = document.getElementById("inputString").value.split(",")
        , arrayindex = 0
        , value = 0
        , internalSplitArray, newArray = [];
    for (arrayindex in splitString) {
        if (splitString[arrayindex].toString().indexOf("...") > -1) {
            internalSplitArray = splitString[arrayindex].split("...");
            for (value in internalSplitArray) {
                if (internalSplitArray[parseInt(value)] < internalSplitArray[parseInt(value) + 1]) {
                    //                    newArray.push(parseInt(internalSplitArray[value]) + 1);
                    internalSplitArray.splice(parseInt(value) + 1, 0, parseInt(internalSplitArray[value]) + 1);
                }
            }
            splitString.splice(parseInt(arrayindex), 1);
            splitString.splice.apply(splitString, [parseInt(arrayindex), 0].concat(internalSplitArray));
        }
    }
    console.log(splitString);
    document.getElementById("answer").innerHTML = splitString;
}