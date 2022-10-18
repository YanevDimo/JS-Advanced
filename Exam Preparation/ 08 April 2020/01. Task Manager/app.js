function solve() {
    // get the input and validate
    let openSection = document.getElementsByTagName('section')[1];
    let progressSection = document.getElementsByTagName('section')[2];
    let completedSection = document.getElementsByTagName('section')[3];
    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let data = document.getElementById('date');

        if (task.value === '' || description.value === '' || data.value === "") {
            return;
        }

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerText = task.value;

        let pDescription = document.createElement('p');
        pDescription.innerText = `Description: ${description.value}`;

        let pData = document.createElement('p');
        pData.innerText = `Due Data: ${data.value}`;

        let div = document.createElement('div');
        div.className = 'flex';

        let startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.innerText = 'Start';

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.innerText = 'Delete';

        deleteBtn.addEventListener('click', deleteElement);

        startBtn.addEventListener('click', () => {

            let finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.innerText = 'Finish';
            finishBtn.addEventListener('click', () => {
                article.lastElementChild.remove();
                completedSection.lastElementChild.appendChild(article);
            })


            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(finishBtn);
            progressSection.lastElementChild.appendChild(article);

            article.lastElementChild[0] = deleteBtn;
        })

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);


        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pData);
        article.appendChild(div);

        openSection.lastElementChild.appendChild(article);

        task.value = '';
        description.value = '';
        data.value = '';

    });
    function deleteElement(ev) {
        ev.target.parentElement.parentElement.remove();
    }
}