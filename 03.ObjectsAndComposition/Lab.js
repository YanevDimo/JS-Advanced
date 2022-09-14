//01.City Record
function city(name, population, treasury) {
    const result = {
        name: name,
        population: population,
        treasury: treasury
    }
    return result;
}

console.log(city('Tortuga', 7000, 15000));
console.log(city('Santo Domingo', 12000, 23500));

//02.Town Population

function towns(list) {

    //iterate input
    //parse each element
    //store result

    const result = {};
    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (result[name] === undefined) {
            result[name] = population;
        } else {
            result[name] += population;
        }
        result[name] = population;
    }
    //print result
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
    // second way to print
    // for (let [name,population] of Object.entries(result)){
    //     console.log(`${name} : ${population}`);
    //}
}

towns(['Sofia <-> 120000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

console.log('-----');

towns(['Istanbul <-> 100000',
    'Hong Kong <-> 210004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    ' Istanbul <-> 1000']);

//03. City Taxes