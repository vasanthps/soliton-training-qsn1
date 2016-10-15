function findNumbers () {
  var strArray = document.getElementById('inputText').value.split(',');
  var numArray = [];
  for(var i = 0; i < strArray.length; i++) {
    findInsertNum(strArray[i], numArray);
  }
  console.log('Number array " ', numArray);
}

function findInsertNum(num, numArray) {
  if (num.indexOf('...') !== -1) {
    var patternStartIndex = num.indexOf('...');
    var patternEndIndex = patternStartIndex + 2;
    var startNum = Number(num.substring(0, patternStartIndex));
    var endNum = Number(num.substring((patternEndIndex + 1)));
    for(var i = startNum; i <= endNum; i++) {
      numArray.push(i);
    }
  } else {
    numArray.push(Number(num));
  }
}