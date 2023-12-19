var diagonalSum = function(mat) {
    let summa = 0;
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        summa+=mat[i][i]
        summa+=mat[i][n-1-i]         
    }
    if(n%2===1){
        summa-=mat[Math.floor(n/2)][Math.floor(n/2)]
    }
    return summa
};

let mat = [[1,2,3],
[4,5,6],
[7,8,9]]
console.log(diagonalSum(mat));