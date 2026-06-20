import {Todo} from "./todo.js";
import {list} from "./list.js";
import {listController} from "./listController.js";

export const listView = (() => {
  const addTask = document.querySelector("#addTask");
  const dialog = document.querySelector("#myDialog");
  const myForm = document.querySelector("#myForm");
  const closeBtn = document.querySelector("#close");
  const mainContent = document.querySelector("#mainContent");
  let editingId = null;
  let updateCard = null;

  addTask.addEventListener("click", () => {
    dialog.show();
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
    myForm.reset();
  });

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoTitle = document.querySelector("#title").value;
    const todoDescription = document.querySelector("#description").value;

    if (editingId === null) {
      let todo = listController.addTodo(todoTitle, todoDescription);
      renderTodo(todo);
    } else {
      listController.updateTodo(editingId, todoTitle, todoDescription);
      updateCard(todoTitle, todoDescription);
      editingId = null;
      listController.log();
    }

    myForm.reset();
    dialog.close();
  });

  const renderTodo = (todo) => {
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h4");
    title.textContent = todo.title;
    const description = document.createElement("h5");
    description.textContent = todo.description;
    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "delete";
    mainContent.append(card);
    card.append(title, description, editBtn, deleteBtn);

    deleteBtn.addEventListener("click", () => {
      listController.deleteTodo(todo.id);
      card.remove();
      listController.log();
    });

    editBtn.addEventListener("click", () => {
      editingId = todo.id;
      document.querySelector("#title").value = todo.title;
      document.querySelector("#description").value = todo.description;
      updateCard = (newTitle, newDescription) => {
        title.textContent = newTitle;
        description.textContent = newDescription;
      };
      dialog.show();
    });
  };
})();
