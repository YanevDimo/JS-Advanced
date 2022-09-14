function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1); // -> slice take the first and last element
    console.log(rows);
    let sum = 0;
    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        sum += value;
    }
    document.getElementById('sum').textContent = sum;
}