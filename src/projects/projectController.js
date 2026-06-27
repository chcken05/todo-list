import {list} from "../list.js";
import {Project} from "./project.js";

export const projectController = (() => {
  const projects = list.getProjects();
  const selectProject = document.querySelector("#projectSelect");

  const createProject = (name) => {
    let project = new Project(name);
    projects.push(project);
    list.save(); // ← add
    return project;
  };

  const updateProject = (id, name) => {
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      projects[index].name = name;
      list.save(); // ← add
    }
  };

  const deleteProject = (id) => {
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      projects.splice(index, 1);
      list.save(); // ← add
    }
  };

  const projectLog = () => console.log(projects);

  const updateProjectDrop = () => {
    const allProjects = list.getProjects();
    while (selectProject.firstChild) {
      selectProject.removeChild(selectProject.firstChild);
    }
    allProjects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.name;
      option.textContent = project.name;
      selectProject.appendChild(option);
    });
  };

  return {createProject, projectLog, updateProject, deleteProject, updateProjectDrop};
})();
