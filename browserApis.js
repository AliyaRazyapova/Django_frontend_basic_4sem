console.log("hello world");
console.debug("debug message");
console.info('info message');
console.error("error message")
console.warn("warn message")

const book = {
    title: "Война и мир",
    author: {
        name: "Лев Толстой",
        birthYear: 1828
    },
    pageCount: 1234,
    isFinished: true,
};
console.dir(book);
console.log(book);

console.groupCollapsed("dom element")
const elem = document.querySelector("h1");
console.dir(elem);
console.log(elem);
console.groupEnd()

const books = [
    {

        title: "Война и мир",
        pageCount: 1234,
        isFinished: true,
    },
    {
        title: "Книга 2",
        pageCount: 120,
        isFinished: false,
    }
]
console.table(books);