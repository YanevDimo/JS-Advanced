function solve() {

    //Get reference to element of interest
    // configure event listener

    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        currentOwner: fields[3]
    }

    //OR const[name,age,kind,currentOwner] = field.map(f => f.value); AND important is ->
    // cons fields = Array.from(document.querySelectorAll('#container input'));

    addBtn.addEventListener('click', addPet);

    // Add new pet
    //  Read input fields
    // Validates values
    // Create new list item
    // Configure event listener for newly created element

    function addPet(event) {
        event.preventDefault();
        const name = input.name.value.trim();
        const age = Number(input.age.value);
        const kind = input.kind.value.trim();
        const owner = input.currentOwner.value.trim();

        if (name === '' || input.age.value.trim() === ''
            || Number.isNaN(age) || kind === '' || owner === '') {
            return;
        }
        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
                e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );
        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.currentOwner.value = '';
        // or clear fields with -> Array.from(fields).foreach(f => f.value);

        //Contact owner
        // Create conformation div
        // Configure event listener for new button
        //  Replace existing button with confirmation div

        function contact() {
            const confirmInput = e('input', {placeholder: 'Enter your names'});
            const confirmButton = e('button', {}, 'Yes! I take it!');
            const confirmationDiv = e('div', {}, confirmInput, confirmButton);

            confirmButton.addEventListener('click', adopt.bind(null, confirmInput, pet));
            contactBtn.remove();
            pet.appendChild(confirmationDiv);
        }
    }

    // # Adopt pet
    // Read and validate input
    // Configure event listener for new button
    // Replace conformation div  with new button
    // Change text content of Owner span
    // Move element to other list

    function adopt(input, pet) {
        const newOwner = input.value.trim()
        if (newOwner === '') {
            return;
        }
        const checkButton = e('button', {}, 'Checked');
        checkButton.addEventListener('click', check.bind(null, pet));

        pet.querySelector('div').remove();
        pet.appendChild(checkButton);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptList.appendChild(pet);
    }

    //Checking of adopted pet
    // Remove element from DOM

    function check(pet) {
        pet.remove();
    }

    function e(type, attribut, ...content) {
        const element = document.createElement(type);
        for (let property in attribut) {

            element[property] = attribut[property];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}