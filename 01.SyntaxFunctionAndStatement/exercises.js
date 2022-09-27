//01.Fruit
function fruit(fruitName, weightInGrams, pricePerKg) {

    let kg = weightInGrams / 1000;
    let price = pricePerKg * kg;
    console.log('I need ' + (price.toFixed(2)) + ' to buy ' + (kg.toFixed(2)) + ' kilograms ' + (fruitName) + '.');
}

fruit('orange', 2500, 1.80);

//02 Greatest Common Divisor – GCD
function greateComonsDivisor(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

//03 SameNumbers

function sameNumbers(number) {
    let input = String(number);
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        let currentDigit = +input[i];
        sum += currentDigit;
        if (firstDigit !== currentDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234)

// 4 Previous Day

function previosDay(year, moth, day) {
    let date = new Date(year, moth - 1, day);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}
previosDay(2016, 9, 30);

//5 Time to Walk

function walkingTime(steps, stepLength, speed){

    let distance = steps * stepLength;

    let breakMinutes = Math.floor(distance / 500);

    let timeInSeconds = ((distance / 1000) / speed) * 3600;

    let seconds = Math.round(timeInSeconds % 60);
    let minutes = Math.floor(timeInSeconds / 60) + breakMinutes;
    let hours = Math.floor(timeInSeconds / 3600);

    let result = '';

    if(hours > 10){
        result += `${hours}:`
    }
    else{
        result += `0${hours}:`
    }

    if(minutes > 10){
        result += `${minutes}:`
    }
    else{
        result += `0${minutes}:`
    }

    if(seconds > 10){
        result += `${seconds}`
    }
    else{
        result += `$0${seconds}`
    }

    console.log(result);
}

walking(4000, 0.6, 5);

//6 RoadRadar

function roadRadar(speed, area) {
    let result = '';
    let speedLimit = 0;
    let diference = 0;
    let status = '';

    switch (area) {
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "motorway":
            speedLimit = 130;
            break;
        default:
            break;
    }
    if (speed <= speedLimit && speed > 0){
        result = `Driving ${speed} km/h in a ${speedLimit} zone`
    }else {
        diference = speed - speedLimit;
        if (diference <= 20){
            status = 'speeding';
        }else if (diference > 20 && diference <= 40){
            status = "excessive speeding"
        }else{
            status = "rekless driving"
        }
        result = `The speed is ${diference}km/h faster than the allowed speed of ${speedLimit}-${status}`;
    }
    console.log(result)
}
roadRadar(120,"interstate");

//7 CookingByNumbers

function cookingByNumbers(num, command1, command2, command3, command4, command5) {
    let number = Number(num);
    const commandList = [command1, command2, command3, command4, command5]
    const operation = {
        chop() { num = num / 2; },
        dice() { num = Math.sqrt(num); },
        spice() { num += 1; },
        bake() { num = num * 3; },
        fillet() { num -= num * 20 / 100; },
    };
    for (let i = 0; i < commandList.length; i++) {
        operation[commandList[i]]();
        console.log(num);
    }
}