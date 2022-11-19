window.addEventListener("load", initEvents);

var fnum;
var snum;
var resultBox;

function initEvents() {

    // Local variable
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    resultBox = document.querySelector("#box_3");

    var btns = document.querySelectorAll(".btn");
    // Loops
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }

}

function calc() {
    // this - refers to current object
    // console.log("Clicked...",this.innerHTML);
    var opr = this.innerHTML;
    var result = 0;
    if(opr == "+") {
        result = parseInt(fnum.value) + parseInt(snum.value);
    }
    else if(opr == "-") {
        result = parseInt(fnum.value) - parseInt(snum.value);
    }
    else if(opr == "/") {
        result = parseInt(fnum.value) / parseInt(snum.value);
    }
    else if(opr == "*") {
        result = parseInt(fnum.value) * parseInt(snum.value);
    }
    resultBox.value = result;
}