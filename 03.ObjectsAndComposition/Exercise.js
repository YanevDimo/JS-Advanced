//01.Calorie Object

// function solve(arr) {
//     let object = {};
//     for (let i = 0; i < arr.length; i+=2) {
//     let product = arr[i];
//     let calories = arr[i + 1];
//     object [product] = Number(calories);
//     object[product] = +calories;
//
//     }
//     console.log(object);
// }
//
// solve(['Yogurt', '48', 'Rise', '138', 'Apple', '52']);

//02. Construction Crew

// function solve(worker) {
//     if (worker.dizziness) {
//
//         worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
//         worker.dizziness = false;
//     }
//     return worker;
// }
//
// solve({
//     weight: 80,
//
//     experience: 1,
//
//     levelOfHydrated: 0,
//
//     dizziness: true
// });

//03. Car Factory

// function solve(wantedCar) {
//     let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
//     let carriages = [{type: 'hatchback', color: wantedCar.color}, {type: 'coupe', color: wantedCar.color}];
//     let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;
//
//     return{
//         model: wantedCar.model,
//         engines:engines.filter(e => e.power >= wantedCar.power)[0],
//         carriages: carriages.filter(c => c.type == wantedCar.carriage)[0],
//         wheels:[wheelsize,wheelsize,wheelsize,wheelsize]
//
//     }
// }
//
// solve({
//     model: 'VW Golf II',
//
//     power: 90,
//
//     color: 'blue',
//
//     carriage: 'hatchback',
//
//     wheelsize: 14
// });

