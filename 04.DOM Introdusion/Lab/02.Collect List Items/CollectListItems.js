function extractText() {
    const items = Array.from(document.querySelectorAll('li'));
    document.getElementById('result').value = items.map(e => e.textContent).join('\n');
}
