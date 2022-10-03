window.addEventListener('load', solve);

function solve() {
    //Get reference to element of interest
    // configure event listener

    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list')

    addButtonElement.addEventListener('click', (ev) => {
        ev.preventDefault();
        let year = Number(yearInputElement.value.trim());
        let price = Number(priceInputElement.value.trim());
        let model = modelInputElement.value.trim();
        let description = descriptionInputElement.value.trim();

        if (!model || !description) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }
        //Crate missing elements
        let rowElement = document.createElement('tr');
        let modelTableDataElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionCellElement = document.createElement('td');
        let infoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');
        let contentRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        modelTableDataElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');
        infoButtonElement.addEventListener('click', (ev) => {
            if (ev.currentTarget.textContent === 'More Info') {
                contentRowElement.style.display = 'contents';
                ev.currentTarget.textContent = 'Less Info'
            } else {
                contentRowElement.style.display = 'none';
                ev.currentTarget.textContent = 'More Info'
            }
        })


        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');

        buyButtonElement.addEventListener('click', () => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            rowElement.remove();
            contentRowElement.remove();
        })

        rowElement.classList.add('info');

        contentRowElement.classList.add('hide');
        contentRowElement.style.display = 'none';

        rowElement.appendChild(modelTableDataElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.
        setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentRowElement.appendChild(yearContentElement);
        contentRowElement.appendChild(descriptionContentElement);

        rowElement.appendChild(infoButtonElement);
        rowElement.appendChild(buyButtonElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentRowElement);
    })
}
