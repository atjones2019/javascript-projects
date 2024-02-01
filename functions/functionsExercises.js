function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line = line + '#';
    }
    return line;
}
function makeSpace(xSpaces){
    let space = '';
    for (let i = 0; i < xSpaces; i++){
        space += ' ';
    }
    return space;
}
// console.log(makeLine(5));

// function makeSquare(length) {
//     let square = ''
//     for (let j = 0; j < length; j++) {
//          square += makeLine(5) + '\n';
//     }
//     return square.slice(0,-1);
// }
// console.log(makeSquare(5));

// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }
//   console.log(makeRectangle(3,4));
// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//       stairs += (makeLine(i+1) + '\n');
//     }
//     return stairs.slice(0, -1);
//   }

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceAndLine = makeSpace(numSpaces) + makeLine(numChars) + makeSpace(numSpaces);

    return spaceAndLine
}

// console.log(makeSpaceLine(8,3));

function makeIsoscelesTriangle(height){
    let triangle ='';
    for (let i = 0; i < height; i++){
        triangle = triangle + (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(7));