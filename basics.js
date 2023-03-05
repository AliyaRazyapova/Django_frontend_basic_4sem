console.log('Hello world');
const a = 1; let b = 1; b = 2

if (a == 1) console.log(123)

console.log(a, b, typeof a);

let str = 'Hello';
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str[0]);
console.log(str.length);
console.log(str.indexOf("e"));
console.log(str.indexOf("H"));
console.log(str.indexOf("a"));

console.log("Still string");
console.log(`still string ${str} ${a}`);
console.log(typeof "str");

const num = 4;
const num2 = 4.5;
console.log(4 + 5, num + num2);
console.log(
    parseInt('1') + 2, '2' - 1
);

const bool = false;
const bool2 = true;
if (bool) {
    console.log("bool = true");
}
else if (bool2) {
    console.log("bool2 = true");
}
else {
    console.log("все переменные врут");
}

let name;
console.log(typeof name, name);

let test = "2";
console.log('==', test == 2);
console.log('===', test === 2);
console.log('OR', test == 2 || test === 2);
console.log('AND', test == 2 && test === 2);

const direction = 'down';
switch (direction) {
    case "up":
        console.log("going up");
        break;
    case "down":
        console.log("going down");
        break;
    default:
        console.log("we don't know the direction");
        break;
}