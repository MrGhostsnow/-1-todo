import {Api} from '../helpers/Api'


const parseResponse = (response) => response.json() //metodo para transformar a resposta em json

export const TaskService = {
    getList: () => fetch(Api.taskCL(), {method: 'GET'}).then(parseResponse), //utilização do fetch com o objeto Api(URL)/ metodo GET(padrão)/ 'then' = 'então' algo como após isso faça aquilo/ 'parseResponse' como metodo(facilitador) para json

    getById: (id) => fetch(Api.taskById(), {method: 'GET'}.then(parseResponse)),

    create: () => fetch(Api.taskCL(),{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(),
    }).then(parseResponse),

    updateById: (id) => fetch(Api.taskById(), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(),
      }).then(parseResponse),

    deleteById: (id) => fetch(Api.taskById(), {method: 'DELETE'}.then(parseResponse)),
}


