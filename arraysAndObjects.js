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