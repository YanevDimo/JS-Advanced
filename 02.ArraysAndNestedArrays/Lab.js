//01.EventElementPosition

function solve(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result += input[i] + ' ';

        }
    }
    console.log(result);
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);

//

//03.Sum First Last

function sumFIrstLast(numsAsString) {
    let first = numsAsString.shift();
    let last = numsAsString.pow();

    const result = Number(first) + Number(last);
    console.log(result);
}

sumFIrstLast(['20', '30', '40']);
sumFIrstLast(['5', '10']);

// other way
//function sumFirstLast(numsAsString) {
//     let first = +[...numsAsString].shift();
//     let last = +[...numsAsString].pow();
//
//     const result = first + last;
//     console.log(result);
// }
//
// sumFIrstLast(['20', '30', '40']);
// sumFIrstLast(['5', '10']);

//04.Negative/PositiveNumber

function solve(nums) {
    const result = [];
    for (let num of nums) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    for (let num of result) {
        console.log(result)
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);

//05.Smallest Two Numbers

//06.Bigger Half

function solve(nums) {
    nums.sort((a, b) => a - b)
    const result = [];
    for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        result.push(nums[i])
    }
    return result
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));


//07. Piece of Pie

function solve(pies, strt, end) {
    const startIndex = pies.indexOf(strt);
    const endIndex = pies.indexOf(end) + 1;

    // console.log(pies.slice(startIndex, endIndex));
    return pies.slice(startIndex, endIndex);
}

solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')

//08. Process Odd Positions

function solve(nums) {
    console.log(nums
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}


solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

//9

//10

//11 EqualNeighbors

function solve(matrix) {

    // init counter
    let counter = 0;

    //check rows
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                counter++;
            }
        }
    }


    //check columns
    const rowSize = matrix[0].length;
    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                counter++;
            }
        }
    }
    //print result
    console.log(counter);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);