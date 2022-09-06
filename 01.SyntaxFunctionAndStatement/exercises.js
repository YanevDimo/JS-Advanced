//01.Fruit
function fruit(fruitName, weightInGrams, pricePerKg) {

    let kg = weightInGrams / 1000;
    let price = pricePerKg * kg;
    console.log('I need ' + (price.toFixed(2)) + ' to buy ' + (kg.toFixed(2)) + ' kilograms ' + (fruitName) + '.');
}

fruit('orange', 2500, 1.80);

//02


//03 SameNumbers

function sameNumbers(number) {
    let input = String(number);
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        let currentDigit = +input[i];
        sum += currentDigit;
        if (firstDigit != currentDigit) {
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

function walking(steps, footprint, speed) {
    let distanceMeters = steps * footprint;
    let speedMetersSecond = speed / 3.6;
    let time = distanceMeters / speedMetersSecond;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHour = Math.flor(time / 3600);

    console.log((timeHour < 10 ? "0" : "") + timeHour + ":"
        + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":"
        + (timeSec < 10 ? "0" : "") + timeSec)

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

