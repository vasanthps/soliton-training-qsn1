
function findRange(ele){
    var range = ele.split('.');
    var retVal = {};
    if(range.length > 1) {
        retVal.min = parseInt(range[0]);
        retVal.max = parseInt(range[range.length - 1]);
    }
    return retVal;
}
function fillDot(outp, range, delta){
    for(var i=range.min; i<=range.max; i+=delta) {
        outp.push(i);
    }
}

function addEle(outp, ele) {
    if(ele.indexOf('.') === -1) {
        outp.push(parseInt(ele));
    }
    else {
        var range = findRange(ele);
        fillDot(outp, range, 1);
    }
    return outp;
}

function strToArr(inp) {
    var splitArr = inp.split(',');
    var outp = splitArr.reduce(addEle, []);
    console.log(outp.join(','));
}

strToArr("1...5..7");
