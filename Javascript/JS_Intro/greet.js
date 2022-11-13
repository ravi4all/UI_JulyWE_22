// we are binding an event with window
// the event name is load
// Event binding : we have binded an event with window
// when window will be loaded it will execute the function binded with event
window.addEventListener("load", function() {
    console.log("Window Loaded...");
    var btn = document.getElementById("btn");
    console.log(btn);
    // now greet function will be called after clicking on button
    btn.addEventListener("click",greet);
});

function greet() {
    console.log("Hello User...");
    var username = document.getElementById("box_1").value;
    document.getElementById("output").innerHTML = username;
}