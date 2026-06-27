import {Todo} from "./todo.js";
import {list} from "../list.js";

export const todoController = (() => {
  const todos = list.getTodos();

  const addTodo = (title, description, selectedProject) => {
    const todo = new Todo(title, description, selectedProject);
    todos.push(todo);
    list.save(); // ← add
    return todo;
  };

  const updateTodo = (id, title, description, project) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      todos[index].title = title;
      todos[index].description = description;
      todos[index].project = project;
      list.save(); // ← add
    }
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      list.save(); // ← add
    }
  };

  const log = () => console.log(todos);

  return {addTodo, deleteTodo, updateTodo, log};
})();
