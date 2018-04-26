var element = document.getElementById("heading");
element.addEventListener("mouseenter", makeGreen);
element.addEventListener("mouseleave", makeBlack);

function makeGreen() {
    element.setAttribute("style", "color:#0f0");
}

function makeBlack() {
    element.setAttribute("style", "color:#000");
}
