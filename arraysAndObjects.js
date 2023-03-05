const arr = [1, "2", 4, [2, 3], 5];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
console.log(arr[arr.length - 1]);
console.log(arr[-1]);
console.log(arr.at(1), arr.at(-1));
console.log(arr.slice(1, 3)) // [1:5]

arr.push(6);
arr.unshift(2);
arr.sort();
console.log(arr);
console.log(arr.splice(3, 1));
console.log(arr);

console.log(arr.join(", "))

/**
 * filter items for following arr.filter()
 * @param item {int} array item
 * @returns {boolean} true of false
 */
function filterItem(item) {
    return item !== 5;
}
console.log(arr.filter(filterItem))


const book = {
    title: "Война и мир",
    author: {
        name: "Лев Толстой",
        birthYear: 1828
    },
    pageCount: 1234,
    isFinished: true,
};
console.log(book);
console.log(book['title']);
book.pageCount++;
console.log(book.pageCount);
console.log(book.author.name);

const jsonTest = {
  "a": 1,
  "b": 2,
  "c": [1,2,3,4]
};
console.log(jsonTest);

const jsonStr = '{"a": 1, "b": 2, "c": [1,2,3,4]}';
const dataFromJson = JSON.parse(jsonStr);
console.log('dataFromJson', dataFromJson);
console.log(dataFromJson == jsonTest);
console.log(JSON.stringify(dataFromJson));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('-------')
for (let item of arr) {
    console.log(item);
}
for (let idx in arr) {
    console.log(idx);
}
arr.forEach(function (item) {
    console.log(item, 'from forEach');
})