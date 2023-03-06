const startDate = new Date();
console.log(startDate);
console.dir(startDate);

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

const end = new Date();
console.log(`runtime: ${end.getTime() - startDate.getTime()}`);

console.log(end.toString())
console.log(end.toDateString())
console.log(end.toLocaleString())