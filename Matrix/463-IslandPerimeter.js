var islandPerimeter = function(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          perimeter += 4;
          if (i > 0 && grid[i - 1][j] === 1) {
            perimeter -= 2;
          }
          if (j > 0 && grid[i][j - 1] === 1) {
            perimeter -= 2;
          }
        }
      }
    }
  
    return perimeter;
  };
  const exampleGrid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ];
  console.log(islandPerimeter(exampleGrid));
  