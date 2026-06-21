import {list} from "../list.js";
import {Project} from "./project.js";

export const projectController = (() => {
  const projects = list.getProject();

  const createProject = (name) => {
    let project = new Project(name);
    projects.push(project);
    return project;
  };

  const projectLog = () => {
    console.log(projects);
  };

  return {createProject, projectLog};
})();
