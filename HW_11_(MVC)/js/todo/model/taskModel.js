function TaskModel(tasks) {

    let allTasks = JSON.parse(localStorage.getItem('allTasks'));

    this.listeners = [];

    tasks = allTasks || tasks;

    tasks.forEach(task => {
        this.push(task);
    });
}

function addToLocalSt() {
    let all = [];
    for (let i = 0; i < tasks.length; i++) {
        all.push(tasks[i]);
    }
    localStorage.setItem('allTasks', JSON.stringify(all));
}




TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    addToLocalSt(tasks);
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false
    };

    this.push(task);
    addToLocalSt(tasks);
    this.trigger('add', [task]);
};


TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }
    localStorage.setItem('arrTasks', JSON.stringify(tasks));
    addToLocalSt();
    this.trigger('delete', [task]);
};





TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;

    this.listeners.forEach(listener => {
        if (listener.event === event) {
            listener.callback.apply(tasks, args);
        }
    });
};


