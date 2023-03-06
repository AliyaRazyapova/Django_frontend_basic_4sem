document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#windowOpenButton").addEventListener("click", function () {
        const win = window.open('https://ya.ru');
        console.log(win);
    });
    document.querySelector("#windowPrintButton").addEventListener("click", function () {
        window.print();
    });

    document.querySelector("#copy").addEventListener("click", function () {
        const code = document.querySelector("#code").value;
        window.navigator.clipboard.writeText(code).then(console.log);
    })
    document.querySelector("#paste").addEventListener("click", function () {
        window.navigator.clipboard.readText().then(content => {
            document.querySelector("#code").value = content;
        });
    });
});
