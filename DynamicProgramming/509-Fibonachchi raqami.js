/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let array = [0,1]
    if(n===0){return 0}
    if(n===1){return 1}
    for (let i = 2; i <= n; i++) {
        array[i] = array[i-1]+array[i-2]
    }
    return array[array.length-1]
};

let n = 1;
console.log(fib(n));