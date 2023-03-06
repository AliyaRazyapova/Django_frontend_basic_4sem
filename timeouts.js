const interval = setInterval(() => console.log("spent 1 sec"), 1000);
const timeout = setTimeout(() => {
    console.log("spent 5 sec")
    clearInterval(interval);
}, 5000);