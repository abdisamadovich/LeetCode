var deleteGreatestValue = function (grid) {
    answer = 0
    for (var i = 0; grid[0].length !== 0; i++) {
        let rowArr = []
        for (var i = 0; i < grid.length; i++) {
            var maxInRow = Math.max(...grid[i])
            var index = grid[i].indexOf(maxInRow)
            rowArr.push(maxInRow)

            grid[i].splice(index, 1)
        }

        let max = Math.max(...rowArr)
        answer += max
    }
    return answer
};
let grid = [[1,2,4],[3,3,1]]
let result = deleteGreatestValue(grid);
console.log(result);
