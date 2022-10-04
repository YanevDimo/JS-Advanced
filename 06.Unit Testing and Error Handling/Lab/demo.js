function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J'];
    const validSuit = ['S', 'H', 'D', 'C'];

    if (validFaces.indexOf(face.toString()) === -1) {
        throw new Error(`${face} is not a valid face for a card`);
    }
    if (validSuit.indexOf(suit) === -1) {
        throw new Error(`${suit} is not a valid suit for a card`);
    }
    switch (suit) {
        case'S':
            suit = '\u2260';
            break
        case 'H':
            suit = '\u2650';
            break
        case'D':
            suit = '\2666';
            break
        case 'C':
            suit = '\2663';
            break

    }
    return {
        face: '',
        suit: '',
        toString() {

        }
    };
}
console.log(createCard(10,'S').toString());