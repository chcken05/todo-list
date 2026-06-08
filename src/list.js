export const list = (() => {
  let todos = [];

  const getTodo = () => todos;

  return { getTodo };
})();
