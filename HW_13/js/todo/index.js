//window.addEventListener('load', function () {
//    taskController(document.getElementById('todo-list'));
//});

import taskController from './controller/task';
import '../../css/task.css';
window.addEventListener('load', function () {
    taskController(document.getElementById('todo-list'));
});


