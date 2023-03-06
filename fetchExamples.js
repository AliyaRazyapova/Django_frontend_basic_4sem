function formHandler(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const username = formdata.get("username");
    console.log("start request");
    const promise = fetch(`https://api.github.com/users/${username}`);
    console.log(promise)
    promise
        .then(function (result) {
            console.log(promise);
            console.log("response");
            return result.json();
        })
        .then(function (content) {
            console.log("content");
            console.log(content);
        })
        .catch(function (result) {
            console.log(promise);
            console.error(result);
        });
    console.log("123");
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#githubForm");
    form.addEventListener("submit", formHandler);
})