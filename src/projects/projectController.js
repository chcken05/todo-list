import {list} from "../list.js";
import {Project} from "./project.js";

export const projectController = (() => {
  const projects = list.getProject();
  const selectProject = document.querySelector("#projectSelect");

  const createProject = (name) => {
    let project = new Project(name);
    projects.push(project);
    return project;
  };

  const projectLog = () => {
    console.log(projects);
  };

  const updateProjectDrop = () => {
    const projects = list.getProject();
    while (selectProject.firstChild) {
      selectProject.removeChild(selectProject.firstChild);
    }
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.name;
      option.textContent = project.name;

      selectProject.appendChild(option);
    });
  };

  return {createProject, projectLog, updateProjectDrop};
})();
