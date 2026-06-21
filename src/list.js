export const list = (() => {
  let todos = [];
  let projects = [];

  const getTodo = () => todos;
  const getProject = () => projects;

  return {getTodo, getProject};
})();
