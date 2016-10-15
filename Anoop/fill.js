var input = '1,2,4...6,7,8...11,12,13'

var nums = input.split(',').reduce((arr, num) => {
    var index = num.indexOf('...');

    if (index === -1) {
        arr.push(parseInt(num));
    } else {
        var begins = parseInt(num.substring(0, index));
        var ends = parseInt(num.substring(index + 3));

        for (let i=begins; i<=ends; i++) {
            arr.push(i);
        }
    }

    return arr;
}, []);

console.log(nums);
