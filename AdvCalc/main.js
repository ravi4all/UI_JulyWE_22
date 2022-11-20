window.addEventListener("load", initEvents);

var resultBox;
var exp;
function initEvents() {
    resultBox = document.querySelector("#resultBox");
    resultBox.setAttribute("readonly","true");

    document.querySelector(".res").addEventListener("click", calc);

    var btns = document.querySelectorAll(".num");
    for (var btn of btns) {
        btn.addEventListener("click", appendNum);
    }

    var oprs = document.querySelectorAll(".opr");
    for (var btn of oprs) {
        btn.addEventListener("click", appendOpr);
    }
}

function appendNum() {
    resultBox.value += this.innerHTML;
    exp = resultBox.value;
}

function appendOpr() {
    // resultBox.value += this.innerHTML;
    resultBox.value = exp + this.innerHTML;
}

function calc() {
    if(resultBox.value == "") {
        alert("Enter Something...");
    }
    else {
        resultBox.value = eval(resultBox.value);
    }
}