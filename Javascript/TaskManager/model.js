class Task {
    constructor(id, name, details) {
        // Initialize variables
        this.id = id;
        this.name = name;
        this.details = details;
        this.date = new Date();
        this.selected = false;
    }
}

var operations = {
    id : 0,
    taskList : [],
    addTask : function(name, desc) {
        this.id++;
        let obj = new Task(this.id, name, desc);
        this.taskList.push(obj);
    },
    
    toggleTask : function(id) {
        var toggleTask = this.taskList.filter(function(obj) {
            return obj.id == id;
        });
        // console.log(toggleTask);
        toggleTask[0].selected = !toggleTask[0].selected;
    },

    deleteTask : function() {
        this.taskList = this.taskList.filter(function(obj) {
            return obj.selected == false;
        });
    },

    sortTask : function(key) {

    },

    updateTask : function() {

    },
    searchTask : function() {

    }
}