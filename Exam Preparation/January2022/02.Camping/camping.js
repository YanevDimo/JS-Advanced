class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfparticipants = [];
        this.priceForTheCamp = {
            'child': 150,
            'stdent': 300,
            'collegian': 500
        };

    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay  stay at the camp.';
        }
        if (this.listOfparticipants.some(p => p.name === name)) {
            return `The ${name} is already registers at camp.`;
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfparticipants.push(participant);
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        if (this.listOfparticipants.some(p => p.name) === name) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfparticipants = this.listOfparticipants.filter(p => p.name === name);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfparticipants.find(p => p.name === participant1)
        let player2 = null

        if (!player1) {
            throw new Error(`Invalid enterd name/s.`);
        }
        if (typeOfGame === 'Battleship') {
            player1.power += 20;

            return `The ${name} successfully completed the game ${typeOfGame}.`;
        } else {
            let nameOfWinner = '';
            player2 = this.listOfparticipants.find(p => p.name === participant2);

            if (!player2) {
                throw new Error(`Invalid enterd name/s.`);
            }
            if (player1.condition !== player2.condition) {
                throw new Error(`Choisen player with equal condition.`)
            }
            if (player1.power > player2.power) {
                player1.wins++;
                nameOfWinner = player1.name;
            } else if (player2.power > player1.power) {
                player2.wins++
                nameOfWinner = player2.name;
            } else {
                return `There is not winner.`
            }
            return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`
        }

        toString()
        {
            console.log(`${this.organizer}  will take ${this.listOfparticipants.length}participants on camping to ${this.location}.`)
            this.listOfparticipants
                .sort((a, b) => b.wins - a.wins)
                .forEach(p => {
                    console.log(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
                })
        }
    }
}