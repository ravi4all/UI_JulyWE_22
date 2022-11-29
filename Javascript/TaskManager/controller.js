window.addEventListener("load", initEvents);

let tableHeader = ["ID", "Task Title", "Task Desc", "Task Date"];

let table;
let taskId = 0;
function initEvents() {
    table = document.querySelector("#table");
    document.querySelector("#addTask").addEventListener("click", addTask);
    generateHeader();
}

function generateHeader() {
    // <thead></thead>
    let thead = table.createTHead();
    // <tr></tr>
    let row = thead.insertRow();
    for(let key of tableHeader) {
        // <th></th>
        let th = document.createElement("th");
        th.innerText = key;
        th.className = "text-center";
        row.appendChild(th);
    }
    table.appendChild(thead);
}

function addTask() {
    let taskTitle = document.querySelector("#box_1").value;
    let taskDesc = document.querySelector("#box_2").value;
    let row = table.insertRow();
    taskId++;
    // insert a new column
    let column = row.insertCell();
    column.innerText = taskId;
    
    column = row.insertCell();
    column.innerText = taskTitle;
    
    column = row.insertCell();
    column.innerText = taskDesc;
    
    column = row.insertCell();
    let date = new Date();
    column.innerText = date;
}