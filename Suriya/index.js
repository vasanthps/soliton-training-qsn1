function stringToArray(str, separator, missingIndicator) {
  var retArr = [], start, end;

  str = str.split(separator);
  str.forEach(function (ele) {
    if (ele.indexOf(missingIndicator) === -1) {
      retArr.push(ele);
    } else {
      ele = ele.split(missingIndicator);
      start = ele[0];
      end = ele[ele.length-1];
      formArrByRange(start, end, retArr);
    }
  });

  return retArr;
}

function formArrByRange(start, end, retArr) {
  var index;
  
  for (index = start; index <= end; index++) {
    retArr.push(index);
  }
}
