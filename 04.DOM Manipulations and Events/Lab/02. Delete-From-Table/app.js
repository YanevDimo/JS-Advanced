function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');

    let emailCellElement = document.querySelectorAll("tr td:nth-of-type(2)");
    let emailElement = Array.from(emailCellElement);
    let targetElement = emailElement.find(e => e.textContent === emailInputElement.value);

    let resultElement = document.getElementById('result');

    // new syntax
    // targetElement.remove();

    //old syntax
    //targetElement.parentNode.removeChild(targetElement);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.'
    }
}