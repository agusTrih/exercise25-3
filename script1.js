import { lowToUp } from "./script4.js";

let button = document.querySelector(".button");
button.addEventListener("click", checkName);

function checkName() {
    let inputValue = document.querySelector(".text").value;
    let show = document.querySelector(".show");
    return (show.innerHTML = lowToUp(inputValue));
}
