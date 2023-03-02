document.addEventListener("DOMContentLoaded", (e) => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let container = document.querySelector(".container");
    if (userInfo == null) {
        console.log("ERROR: No user info found.");
    } else {
        container.innerHTML += " " + userInfo.firstname;
    }
    unfade(container);
});

function unfade(element) {
    var op = 0.01;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.02;
    }, 1);
}