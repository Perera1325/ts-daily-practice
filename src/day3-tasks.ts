type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [];

function addTask(title: string): void {
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
}

function completeTask(id: number): void {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
  }
}

function listTasks(): void {
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
