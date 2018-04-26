var greeterButton = document.getElementById("greeterButton");
greeterButton.addEventListener("click", greet);

function greet() {
    var textArea = document.getElementById("greeterTextArea");
    var textAreaValue = textArea.value;
    var greeterResponse = document.getElementById("greeterResponse");
    greeterResponse.innerHTML = "Hello " + textAreaValue;
}
