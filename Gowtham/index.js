// Fill the dots
function constructArrayFromString(string){
    console.log("Inside function");
    console.log(string);
    string = string.replace(/\.+/g,'.')
    console.log(string);
    var numStringsArr = string.split('.');
    var arrayLength = numStringsArr.length;
    for (var i = 0; i < arrayLength-1; i++) {
        console.log(numStringsArr[i]);
        //Do something
        var start = numStringsArr[i][numStringsArr[i].length-1];
        var end = numStringsArr[i+1][0];
        console.log(start + " " + end);
    }
}


constructArrayFromString("1,2,3..6,7")