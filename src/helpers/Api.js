const TaskContext = {
  taskEndpoint: () => `${Api.baseUrl}/tasks`, //URL inicial(base)
  taskCL: () => TaskContext.taskEndpoint(), //URL para criar e lista
  taskById: (id) => `${TaskContext.taskEndpoint()}/${id}`, //URL para buscar por ID
  // createTask: () => TaskContext.taskEndpoint(),
};

const urls = {
  development: "http://localhost:8000",
  production: "https://fake-api-todo.herokuapp.com",
};

export const Api = {
  baseUrl: "https://fake-api-todo.herokuapp.com",
  ...TaskContext,
};
