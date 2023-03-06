document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#windowOpenButton").addEventListener("click", function () {
        const win = window.open('https://ya.ru');
        console.log(win);
    });
})