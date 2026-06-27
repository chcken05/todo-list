import {todoController} from "./todos/todoController.js";
import {todoView} from "./todos/todoView.js";
import {projectController} from "./projects/projectController.js";
import {projectView} from "./projects/projectView.js";
import {list} from "./list.js";
import "./styles.css";

const renderAll = () => {
  list.getProjects().forEach((p) => projectView.renderProject(p));
  list.getTodos().forEach((t) => todoView.renderTodo(t));
};

list.load();
renderAll();
