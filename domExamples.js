const printHandlerType = event => console.log(event.type);

window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1");
    console.log(header);

    header.addEventListener("click", () => {
        console.log("вы нажали на заголовок");
        const textParts = header.innerText.split(' ');
        const lastTextPart = textParts.at(-1)
        let number = parseInt(lastTextPart) || 0;
        number++;
        const endPosition = number <= 1 ? textParts.length : textParts.length - 1;
        // end_position = len(textParts) if number <= 1 else len(textParts) - 1
        const textAsStr = textParts.slice(0, endPosition).join(" ")
        header.innerText = `${textAsStr} ${number}`;
    });

    console.log(document.querySelector("p.paragraph"));
    console.log(document.querySelector("#results"));
    document.querySelector("#results").innerHTML = 'результаты!';

    console.log(document.querySelector("p a"));
    console.log(document.querySelectorAll("p"));

    const link = document.querySelector("a");
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("произошло нажатие на ссылку", event.target);
    });

    const body = document.querySelector('body');
    body.addEventListener("mousemove", (event) => {
        // console.log(event.clientX, event.clientY);
    })
    body.addEventListener("keyup", (e) => console.log('keyup', e));
    body.addEventListener("keydown", (e) => console.log('keydown', e));
    body.addEventListener("keypress", (e) => console.log('keypress', e));

    const input = document.querySelector("input");
    input.addEventListener("change", printHandlerType);
    input.addEventListener("input", printHandlerType);
    input.addEventListener("click", printHandlerType);
    input.addEventListener("mouseover", printHandlerType);
    input.addEventListener("mouseout", printHandlerType);
    input.addEventListener("blur", printHandlerType);
    setTimeout(() => {
        input.removeEventListener("blur", printHandlerType);
    }, 2000);
});