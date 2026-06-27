import {Project} from "./project.js";
import {projectController} from "./projectController.js";
import {list} from "../list.js";

export const projectView = (() => {
  const addProject = document.querySelector("#addProject");
  const dialogProject = document.querySelector("#projectDialog");
  const formProject = document.querySelector("#projectForm");
  const cancelBtn = document.querySelector("#closeProject");
  const projectContainer = document.querySelector(".projects");
  let editingId = null;
  let updateProject = null;

  addProject.addEventListener("click", () => {
    dialogProject.show();
  });

  cancelBtn.addEventListener("click", () => {
    dialogProject.close();
    formProject.reset();
  });

  formProject.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    if (editingId === null) {
      const project = projectController.createProject(name);
      renderProject(project);
    } else {
      projectController.updateProject(editingId, name);
      updateProject(name);
      editingId = null;
    }
    projectController.projectLog();
    projectController.updateProjectDrop();
    dialogProject.close();
    formProject.reset();
  });

  const renderProject = (project) => {
    const projectCard = document.createElement("div");
    const projectTitle = document.createElement("h4");
    projectTitle.textContent = project.name;

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    projectCard.append(projectTitle, editBtn, deleteBtn);

    projectContainer.append(projectCard);

    editBtn.addEventListener("click", () => {
      editingId = project.id;
      document.querySelector("#name").value = project.name;
      updateProject = (newName) => {
        projectTitle.textContent = newName;
      };
      dialogProject.show();
    });

    deleteBtn.addEventListener("click", () => {
      projectController.deleteProject(project.id);
      projectCard.remove();
      dialogProject.close();
      projectController.projectLog();
    });
  };
})();
