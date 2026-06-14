import { Todo } from "./todo.js";
import { list } from "./list.js";
import { listController } from "./listController.js";

const addTest = document.querySelector("#addTask");
const dialog = document.querySelector("#myDialog");
const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");

export const listView = (() => {
  addTask.addEventListener("click", () => {
    dialog.show();
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  submitBtn.addEventListener("click", () => {
    const todoTitle = document.querySelector("#title").value;
    const todoDescription = document.querySelector("#description").value;

    listController.addTodo(todoTitle, todoDescription);
    listController.log();
  });
})();
