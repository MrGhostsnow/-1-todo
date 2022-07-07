import { useState, useEffect } from "react";
import BaseForm from "./BaseForm";
import BaseButton from "./BaseButton";
import FormCreate from "./FormCreate";

function TaskList() {
  const baseURL = "http://localhost:8000/tasks";

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({
    task_id: "",
  });
  const [newTask, setNewTask] = useState({
    task: "",
  });
  const [taskAtualizada, setTaskAtualizada] = useState({
    task: "",
    id: "",
    completed: false,
  });

  async function findAllTasks() {
    const response = await fetch(baseURL);
    const tasks = await response.json();
    setTaskList(tasks);
  }

  //   Utiliza o Hook Effect para definir quanto a função será chamada
  useEffect(() => {
    findAllTasks();
  }, [newTask]);

  async function findById(id) {
    const response = await fetch(`${baseURL}/${id}`);
    const task = await response.json();
    setTaskList([task]);
  }

  async function create(task) {
    const response = await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTaskList([newTask]);
  }

  async function editTask(id, edited_task) {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(edited_task),
    });
    const task_edited = await response.json();
    setTaskList({ ...task_edited });
  }

  async function deleteTask(id) {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const task_deleted = await response.json();
    setTaskAtualizada({ ...task_deleted });
  }

  //   Captura a mudança do input de pesquisa
  const handleChange = (e) => {
    // console.log(task)
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  //   Encontrar a task pelo id
  const handleClick = (e) => {
    // console.log(task.task_id)
    findById(task.task_id);
    setTask({
      task_id: "",
    }); // Apagar input
  };

  //   Voltar para Home
  const handleBackHome = (e) => {
    findAllTasks();
  };

  //   Captura a mudança do input de criar
  const handleChangeCreate = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleChangeEdit = (e) => {
    setTaskAtualizada({ ...taskAtualizada, [e.target.name]: e.target.value });
  };

  const handleCreateTask = () => {
    const task_create = { ...newTask }; //Define a const como o objeto capturado e 'setado' na handleChangeCreate(newTask)
    create(task_create); //Chama a função create e define o objeto capturado como aquilo que vai ser criado e enviado para a API
    setNewTask({
      task: "",
    }); //'0' o input de criação
  };

  const handleEditTask = () => {
    const task_edited = { taskAtualizada };
    const id = task_edited.id;

    delete task_edited.id;
    editTask(id, task_edited);
  };

  const handleClickEdit = (e) => {
    setTaskAtualizada({ ...taskAtualizada, id: e.target.id });
    console.log(task);
  };

  const handleDeleteTask = (e) => {
    console.log(e.target.id);
    // deleteTask(e.target.id)
    // window.location.reload(true);
  };

  return (
    <div className="taskList_container">
      <h1>Task's</h1>
      {/* Form de criação */}
      <FormCreate
        onChange={handleChangeCreate}
        task_value={newTask.task}
        onClick={handleCreateTask}
        label={"Add new Task"}
      />

      {/* findById funcionando */}
      <BaseForm
        id="findById"
        type="text"
        label="Search"
        onChange={handleChange}
        name="task_id"
        value={task.task_id}
      />

      {/* Colocar icone de busca / Funcionando */}
      <BaseButton
        type="button"
        className={`btn btn-search`}
        onClick={handleClick}
        label="Search"
      />

      {/* Estilizar Botão de voltar para pagina inicial / Funcionando */}
      <BaseButton label="Voltar" onClick={handleBackHome} />

      {taskList.map((task, index) => (
        <div key={index} className="card_Task">
          <p className="card_Text">{task.task}</p>

          <BaseButton //Botão deletar/ não funciona
            id={task.id}
            type="button"
            className={`btn btn-delete`}
            label="Delete" //Adicionar icone
            onClick={handleDeleteTask}
          />

          {/* Form de edição / aplicar renderização condicional */}
          <FormCreate
            onChange={handleChangeEdit}
            task_value={taskAtualizada.task}
            onClick={handleEditTask}
            label={"Edit final"}
          />

          <BaseButton //Botão editar/ não funciona
            id={task.id}
            type="button"
            className={`btn btn-edit`}
            label="Edit" //Adicionar icone
            onClick={handleClickEdit}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
