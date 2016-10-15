// Generate Missing Integers
function generateIntegerArray(startIndex, endIndex){
    var arr = new Array();
    for (var i = startIndex+1; i < endIndex; i++) {
        arr.push(i)
    }
    return arr;
}

// Convert Integer to String
function convertStringToIntArr(stringArray){
    var arr = new Array();
    stringArray = stringArray.split(',');
    for(var i = 0;i < stringArray.length;i++)
    {
        arr.push(parseInt(stringArray[i]));
    }
    return arr;
}

// Construct Integer array from missing strings 
function constructArrayFromString(string){
    string = string.replace(/\.+/g,'.')
    var numStringsArr = string.split('.');
    var arrayLength = numStringsArr.length;
    var resultArray = "";
    var result = ""
    for (var i = 0; i < arrayLength-1; i++) {
        stringArr = numStringsArr[i].split(',')
        stringNextArr = numStringsArr[i+1].split(',')
        var start = stringArr[stringArr.length-1];
        var end = stringNextArr[0];
        var missingIntegers = generateIntegerArray(parseInt(start), parseInt(end));
        //console.log(i + " missingIntegers" + missingIntegers);
        resultArray = stringArr + ',' + missingIntegers;
        result = result + resultArray + ',';
    }
    result = result + numStringsArr[numStringsArr.length-1];
    //console.log("Result " +result);
    return convertStringToIntArr(result);
}


//constructArrayFromString("1,2,3..6,7..9")
console.log(constructArrayFromString("1,2,3..9,10,11...13...15.17"))
//console.log(constructArrayFromString("11...13"))
//console.log(generateIntegerArray(11, 13))