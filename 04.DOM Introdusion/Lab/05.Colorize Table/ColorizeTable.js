function colorize() {
    // TODO
    const rows = document.querySelectorAll('tr');
    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.background = 'teal';
    }
}
// function colorize() {
//     // TODO
//     const rows = document.querySelectorAll('tr:nth-child(even)');
//     for (let i = 0; i < rows.length; i++) {
//         rows[i].style.background = 'teal';
//     }
// }