var numberButton = document.getElementById("numberButton");
numberButton.addEventListener("click", numberDoubler);

function double(number) {
    return number * 2;
}
function numberDoubler() {
    var textArea = document.getElementById("numberTextArea");
    var textAreaValue = textArea.value;
    var textAreaAsInt = Number.parseInt(textAreaValue);
    var answer = double(textAreaAsInt);
    var answerArea = document.getElementById("numberResponse");
    answerArea.innerHTML = answer;
}