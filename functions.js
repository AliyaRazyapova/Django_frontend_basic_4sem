function test(a, b) {
    return a + b;
}
console.log(test(1, 2));
const test2 = (a, b) => {
    return a + b;
}
console.log(test2(2, 3));

const test3 = (a, b) => a + b;
// lambda a, b: a + b
console.log(test3(2, 3));

function kwargExample({test}) {
    console.log(test);
}
kwargExample({test: 1});

function argExample() {
    console.log(arguments);
}
argExample(1,2,3);