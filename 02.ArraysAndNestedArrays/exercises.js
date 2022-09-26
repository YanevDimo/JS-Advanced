//01 Print an Array with a Given Delimiter

function solve(arr, delimiter) {
    console.log(arr.join(delimiter));
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'], '-');


//02.Print Every N-th Element from an Array

function solve(arr, step) {
    return arr.filter((element, index) => index % step === 0)

}

solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2)

//03. Add and Remove Elements

function solve(arr) {
    let newArr = [];
    let numb = 0;
    for (let i = 0; i < arr.length; i++) {
        numb++;
        let command = arr[i];
        if (command === 'add') {
            newArr.push(numb)
        } else if (command === 'remove') {
            newArr.pop()
        }
    }
    if (newArr.length === 0) {
        console.log('Emppty')
    } else {
        console.log(newArr.join('\n'))
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

//04. Rotate Array

function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        //remove the last element from the arr
        //add that element to the start of the arr
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

solve(['1',
        '2',
        '3',
        '4'],
    2)

//05. Extract Increasing Subsequence from Array

function solve(arr) {
    let result = [];
    let biggest = arr[0]

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum >= biggest) {
            result.push(currentNum);
            biggest = currentNum;
        }
    }
    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))

//06. List Of Names
function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"])

//07. Sorting Numbers

function solve(arr) {
    let result = [];
    //from biggest to small
    arr.sort((a, b) => b - a);

    // from small to biggest
    // arr.sort((a, b) => a - b)
    while (arr.length !== 0) {
        result.push(arr.pop());
        result.push(arr.shift());
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

//08. Sort an Array by 2 Criteria


function solve(arr) {
    arr.sort(twoCriteriaSort);
    return arr.join('\n')

    function twoCriteriaSort(current, next) {
        //sort
        if (current.length === next.length) {
            //implement second criteria
            return current.localeCompare(next)
        }
        return current.length - next.length;
    }
}

console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));


//09.Magic Matrices

function solve(matrix) {
    let isMagical = true;

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRowNext = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColNext = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[i][j];
            sumColNext += matrix[i + 1][j];
        }
        if (sumRowOne !== sumRowNext || sumColOne !== sumColNext){
            isMagical = false;
        }
    }
    return isMagical;
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);