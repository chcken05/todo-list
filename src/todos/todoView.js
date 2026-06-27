import {Todo} from "./todo.js";
import {list} from "../list.js";
import {todoController} from "./todoController.js";

export const todoView = (() => {
  const addTask = document.querySelector("#addTask");
  const dialog = document.querySelector("#myDialog");
  const myForm = document.querySelector("#myForm");
  const closeBtn = document.querySelector("#close");
  const mainContent = document.querySelector("#mainContent");
  const projectSelect = document.querySelector("#projectSelect");
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
    const selectedProject = projectSelect.value;

    if (editingId === null) {
      let todo = todoController.addTodo(todoTitle, todoDescription, selectedProject);
      renderTodo(todo);
      todoController.log();
    } else {
      todoController.updateTodo(editingId, todoTitle, todoDescription, selectedProject);
      updateCard(todoTitle, todoDescription);
      editingId = null;
      todoController.log();
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
      todoController.deleteTodo(todo.id);
      card.remove();
      todoController.log();
    });

    editBtn.addEventListener("click", () => {
      editingId = todo.id;
      let activeIndex = projectSelect.selectedIndex;
      document.querySelector("#title").value = todo.title;
      document.querySelector("#description").value = todo.description;
      projectSelect.value = todo.project;
      updateCard = (newTitle, newDescription, newProject) => {
        title.textContent = newTitle;
        description.textContent = newDescription;
      };
      dialog.show();
    });
  };

  return {renderTodo};
})();
