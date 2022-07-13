const TaskContext = {
    taskEndpoint: () => `${Api.baseUrl}/tasks`, //URL inicial(base)
    taskCL: () => TaskContext.taskEndpoint(), //URL para criar e lista
    taskById: (id) => `${TaskContext.taskEndpoint()}/${id}`, //URL para buscar por ID
    // createTask: () => TaskContext.taskEndpoint(),
    
}

export const Api = {
    baseUrl: "http://localhost:8000",
    ...TaskContext,
}