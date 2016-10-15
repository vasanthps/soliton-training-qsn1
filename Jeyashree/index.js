var inputStr = '1,2,3...6,7,8...11,12...15';
var arr = [];
var outputArr = [];
var intermediate = [];
var interStr = '';

/**
 * Convert to array
 */
var strToArr = function () {
  arr = inputStr.split('');

 console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number' && typeof (arr[i+1]) === 'number') {
      intermediate.push(arr[i]);
      intermediate.push(arr[i+1]);
      interStr = intermediate.join();
      intermediate = [];
    }

  }
};


/**
 * Process to fill missing numbers
 */

var onProcess = function () {
  while (arr.length > 0) {
    var pointIdx = arr.indexOf('.');

    for (var i = 0; i < pointIdx; i++) {
      outputArr.push(arr[i]);
    }

    var startNum = parseInt(arr[pointIdx - 1]);
    var endNum = parseInt(arr[pointIdx + 3]);

    for (var i = startNum + 1; i <= endNum; i++) {
      outputArr.push(i);
    }

    for (var i = 0; i < endNum + 3; i++) {
      arr.shift();
    }

    // console.log(arr);

    console.log(outputArr);
  }


};

strToArr();
// onProcess();
