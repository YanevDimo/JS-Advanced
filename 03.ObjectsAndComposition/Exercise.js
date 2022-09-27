//01.Calorie Object

function solve(arr) {
    let object = {};
    for (let i = 0; i < arr.length; i+=2) {
    let product = arr[i];
    let calories = arr[i + 1];
    object [product] = Number(calories);
    object[product] = +calories;

    }
    console.log(object);
}

solve(['Yogurt', '48', 'Rise', '138', 'Apple', '52']);

//02. Construction Crew

function solve(worker) {
    if (worker.dizziness) {

        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}

solve({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
});

//03. Car Factory

function carFactory(clientModel){

    let model = clientModel['model'];
    let power = clientModel['power'];
    let carriage = clientModel['carriage'];
    let color = clientModel['color'];
    let wheels = clientModel['wheelsize'];

    const car = {};
    car['model'] = model;

    const engine = {
        power: 0,
        volume: 0
    };

    if(power <= 90){
        engine['power'] = 90;
        engine['volume'] = 1800;

        car['engine'] = engine;
    }
    else if(power <= 120){
        engine['power'] = 120;
        engine['volume'] = 2400;

        car['engine'] = engine;
    }
    else{
        engine['power'] = 200;
        engine['volume'] = 3500;

        car['engine'] = engine;
    }

    car['carriage'] = {type: carriage, color: color};

    if(wheels % 2 !== 0){
        car['wheels'] = [wheels, wheels, wheels, wheels];
    }
    else{
        let size = wheels - 1;
        car['wheels'] = [size, size, size, size];
    }

    return car;
}

solve({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
});

//04.Heroic Inventory

function inventory(input){
    let result = [];

    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

//05. Lowest Prices in Cities

function lowestPrice(input){

    let result = [];
    for (const product of input) {
        let [town, productName, price] = product.split(' | ');

        const currProduct = {
            id: productName,
            price: Number(price),
            place: town
        }

        if(!result.some(p => p.id === currProduct.id)){
            result.push(currProduct);
        }

        const compareProduct = result.find(p => p.id === productName);

        if(Number(price) < compareProduct.price){
            compareProduct.place = town;
            compareProduct.price = Number(price);
        }
    }

    result.forEach(element => {
        console.log(`${element.id} -> ${element.price} (${element.place})`)
    });
}

lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])

//06. Store Catalogue

function storeCatalogue(input){
    const catalogue = {};

    for (const iterator of input) {
        let [productName, price] = iterator.split(' : ');

        const currProduct = {
            productName: productName,
            price: price
        };

        if(!Object.keys(catalogue).some(p => p[0] === productName[0])){
            catalogue[productName[0]] = [];
        }

        catalogue[productName[0]].push(currProduct);
    }

    for (const key of Object.keys(catalogue).sort()) {
        console.log(key);
        for (const product of catalogue[key].sort((a, b) => (a.productName).localeCompare(b.productName))) {
            console.log(`  ${product.productName}: ${product.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

//07. Towns to JSON

function townsToJson(input){
    let arr = [];

    for(let i = 1; i < input.length; i++){
        let curr = input[i].split('|').filter(n => n);
        let latitude = Number(curr[1]).toFixed(2);
        let longitude = Number(curr[2]).toFixed(2);

        const currTown = {
            Town: curr[0].trim(),
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        arr.push(currTown);
    }

    return JSON.stringify(arr);
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));

//08. Rectangle

function rectangle(width, height, color){
    const rectangle = {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.substring(1),
        calcArea: function(){
            return this.width * this.height;
        }
    }
    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

//09. Sorted List

function createSortedList(){

    const sortedList = [];

    const list = {
        add: function(item){
            sortedList.push(item);
            sortedList.sort((a, b) => a - b);
        },
        remove: function(index){
            if(index < 0 || index >= sortedList.length){
                return;
            }

            sortedList.splice(index, 1);
            sortedList.sort((a, b) => a - b);
        },
        get: function(index){
            if(index >= 0 && index < sortedList.length){
                return sortedList[index];
            }
        },
        get size(){
            return sortedList.length;
        }
    }
    return list;
}

//10.Heroes

function solve(){
    return {
        fighter: function(heroName){
            return {
                name: heroName,
                health: 100,
                stamina: 100,
                fight: function(){
                    this.stamina -= 1;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        },
        mage: function(heroName){
            return {
                name: heroName,
                health: 100,
                mana: 100,
                cast: function(spellName){
                    this.mana -= 1;
                    console.log(`${this.name} cast ${spellName}`);
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);



