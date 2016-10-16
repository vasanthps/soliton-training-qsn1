var input = '1,2,4...6...11,12,13'

var nums = input.split(',').reduce((arr, num) => {
    if (num.indexOf('...') === -1) {
        arr.push(parseInt(num));
    } else {

        let last = num.split('...')
            .map(num => parseInt(num))
            .reduce((begins, ends) => {
                for (let i=begins; i<ends; i++) {
                    arr.push(i);
                }

                return ends;
            });

        arr.push(last);

    }

    return arr;
}, []);

console.log(nums);
