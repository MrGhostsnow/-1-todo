import {Api} from '../helpers/Api'


const parseResponse = (response) => response.json() //metodo para transformar a resposta em json

export const TaskService = {
    getList: () => fetch(Api.taskCL(), {method: 'GET'}).then(parseResponse), //utilização do fetch com o objeto Api(URL)/ metodo GET(padrão)/ 'then' = 'então' algo como após isso faça aquilo/ 'parseResponse' como metodo(facilitador) para json

    getById: (id) => fetch(Api.taskById(id), {method: 'GET'}).then(parseResponse),

    create: (task) => fetch(Api.taskCL(),{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(task),
    }).then(parseResponse),

    updateById: (id, edited_task) => fetch(Api.taskById(id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(edited_task),
      }).then(parseResponse),

    deleteById: (id) => fetch(Api.taskById(id), {method: 'DELETE'}).then(parseResponse),
}


