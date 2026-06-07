class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = Date.now();
  }
}

let todos = [];

const addTodo = (title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  todos.push(todo);
  return todo;
};
