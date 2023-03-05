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
});