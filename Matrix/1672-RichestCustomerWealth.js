var maximumWealth = function(accounts) {
    let maxson = 0
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            sum +=accounts[i][j]
        }
        if(sum>maxson){
        maxson = sum}
    }
    return maxson
};

let accounts = [[1,2,3],[3,2,1]]
let x = maximumWealth(accounts)
console.log(x);