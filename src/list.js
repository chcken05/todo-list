export const list = (() => {
  let todos = [];
  let projects = [];

  const getTodos = () => todos;
  const getProjects = () => projects;

  const save = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const load = () => {
    const savedProjects = localStorage.getItem("projects");
    const savedTodos = localStorage.getItem("todos");

    if (savedProjects) {
      const parsed = JSON.parse(savedProjects);
      projects.push(...parsed); // mutate instead of reassign
    }
    if (savedTodos) {
      const parsed = JSON.parse(savedTodos);
      todos.push(...parsed); // mutate instead of reassign
    }
  };

  return {getTodos, getProjects, save, load};
})();
