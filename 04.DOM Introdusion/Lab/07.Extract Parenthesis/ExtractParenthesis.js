function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';
    const pattern = /\((.+?)\)/g;
    let matc = pattern.exec(text);

    while (matc != null) {
        result += matc[1] + '; ';

        matc = pattern.exec(text);
    }
    return result;
}