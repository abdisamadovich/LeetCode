var flipAndInvertImage = function(image) {
    let n = image.length
    image = image.map(x => x.reverse());
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(image[i][j] === 0){
                image[i][j] = 1;
            }
            else{
                image[i][j] = 0
            }
        }        
    }
    return image
};

let image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(image));