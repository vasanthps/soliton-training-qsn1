var num = "1,2,3...6,7,8...11,12...15";

var numberArr = [], lastInt;
var strarr = num.split(',');
for(i=0; i<strarr.length ; i++) {
  if(strarr[i].length === 1) {
    numberArr.push(parseInt(strarr[i]));
  } else {
    if(strarr[i].charAt(0) === '1') {
      startInt = strarr[i].charAt(0) + strarr[i].charAt(1);
    } else {
      startInt = strarr[i].charAt(0);
    }
    if(strarr[i].charAt(4) === '1') {
      lastInt = strarr[i].charAt(4) + strarr[i].charAt(5);
    } else if(strarr[i].charAt(4) === '.') {
      lastInt = strarr[i].charAt(5) + strarr[i].charAt(6);
    } else {
      lastInt = strarr[i].charAt(4);
    }
    IteratePush(parseInt(startInt), parseInt(lastInt));
  }
}

function IteratePush(startInt, lastInt) {
  var int = startInt;
  while (int <= lastInt) {
    numberArr.push(parseInt(int));
    int++;
  }
}
console.log("numberArr :", numberArr);
