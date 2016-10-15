function fillString(string) {
  var numArray = processArray(string.split(',')),
    resultArray = [];

  numArray.forEach(function(ele, index, array) {
    if(Number.isNaN(ele)) {
      resultArray = resultArray.concat(findMissingNumbers(index, array));
    } else {
      resultArray.push(ele);
    }
  });

  return resultArray;
}

function processArray(array) {
  var temp = [];

  array.forEach(function(ele) {
    if(Number.isNaN(parseInt(ele)) {
      temp = temp.concat(processString(ele));
    } else {
      temp.push(parseInt(ele));
    }
  });

  return temp;
}

function processString(string) {
  var tempArray = [],
  strLength = string.length, i;

  for(i = 0, i < strLength; i += 3) {
    tempArray.push(parseInt(string[i]));

    if(tempArray[i+1] !== undefined)  {
      tempArray.push(',');
    }
  }

  return tempArray;
}

function findMissingNumbers(index, array) {
  var prev = array[index - 1] || 0,
    next = array[index + 1] || (prev + 1),
    missingNumbers = [], i;

  for(i = prev + 1; i < next; i++ ) {
    missingNumbers.push(i);
  }

  return missingNumbers;
}
