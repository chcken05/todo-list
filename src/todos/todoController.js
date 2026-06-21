import {Todo} from "./todo.js";
import {list} from "../list.js";

export const todoController = (() => {
  const todos = list.getTodo();

  const addTodo = (title, description) => {
    const todo = new Todo(title, description);
    todos.push(todo);
    return todo;
  };

  const updateTodo = (id, title, description) => {
    const index = todos.findIndex((t) => t.id === id);
    console.log("id passed in:", id, "index found:", index);
    if (index !== -1) {
      todos[index].title = title;
      todos[index].description = description;
    }
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) todos.splice(index, 1);
  };

  const log = () => {
    console.log(todos);
  };

  return {addTodo, deleteTodo, updateTodo, log};
})();
