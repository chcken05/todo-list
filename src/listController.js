import { Todo } from "./todo.js";
import { list } from "./list.js";

export const listController = (() => {
  const todos = list.getTodo();

  const addTodo = (title, description, dueDate, priority, project) => {
    const todo = new Todo(title, description, dueDate, priority, project);
    todos.push(todo);
  };

  const log = () => {
    console.log(todos);
  };

  return { addTodo, log };
})();
