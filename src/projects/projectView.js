import {Project} from "./project.js";
import {projectController} from "./projectController.js";
import {list} from "../list.js";

export const projectView = (() => {
  const addProject = document.querySelector("#addProject");
  const dialogProject = document.querySelector("#projectDialog");
  const formProject = document.querySelector("#projectForm");
  const cancelBtn = document.querySelector("#close");

  addProject.addEventListener("click", () => {
    dialogProject.show();
  });

  cancelBtn.addEventListener("click", () => {
    dialogProject.close();
    formProject.reset();
  });

  formProject.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    projectController.createProject(name);
    projectController.updateProjectDrop();
    dialogProject.close();
    formProject.reset();
    projectController.projectLog();
  });
})();
