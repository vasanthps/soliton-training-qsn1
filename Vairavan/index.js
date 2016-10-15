var str = "1,2,3...6,7,8...11,12...15", i, j, len, num_array, res_array;
num_array = str.split(",");
res_array = [];
len = num_array.length;
for(i = 0; i < len; i += 1) {
    if(num_array[i].length > 1){
        for(j = parseInt(num_array[i].substring(0, num_array[i].indexOf('.'))); j <= parseInt(num_array[i].slice(4)); j += 1) {
            res_array.push(j);
        }
    } else {
        res_array.push(parseInt(num_array[i]));
    }
}
console.log(res_array);