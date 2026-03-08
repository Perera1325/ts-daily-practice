"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks = [];
function addTask(title) {
    const newTask = {
        id: Date.now(),
        title,
        completed: false
    };
    tasks.push(newTask);
}
function completeTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
    }
}
function listTasks() {
    console.log("Task List:");
    tasks.forEach(task => {
        const status = task.completed ? "✅ Done" : "⏳ Pending";
        console.log(`- ${task.title} [${status}]`);
    });
}
// Demo usage
addTask("Learn TypeScript arrays");
addTask("Practice daily commits");
completeTask(tasks[0].id);
listTasks();
//# sourceMappingURL=day3-tasks.js.map