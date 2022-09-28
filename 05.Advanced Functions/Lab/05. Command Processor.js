function createProcessor() {
    let state = "";

    function append(str) {
        state += str;
    }
    function removeStart(n) {
        state = state.slice(n);
    }
    function removeEnd(n) {
        state = state.slice(0, -n);
    }
    function print() {
        console.log(state);
    }
    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}

const test = createProcessor();

test.append('hello');
test.append('again');
test.removeStart(3);
test.removeEnd(4);
test.print();