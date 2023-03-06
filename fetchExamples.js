async function formHandler(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const username = formdata.get("username");
    console.log("start request");
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log("response");
        console.log(response);
        const content = await response.json();
        console.log("content");
        console.log(content);
    }
    catch (error) {
        console.error(result);
    }    
    console.log("123");
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#githubForm");
    form.addEventListener("submit", formHandler);
})