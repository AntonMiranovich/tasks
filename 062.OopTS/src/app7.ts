// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.

class TodoList {
  tasks = {};

  addTask(it) {
    this.tasks = it;
  }

  removeTask(it) {
    delete this.tasks[it];
  }

  getTasks() {
    return this.tasks;
  }
}

const todoList = new TodoList();
todoList.addTask("work");
todoList.addTask("sleep");
todoList.removeTask("work");
console.log(todoList.getTasks());
