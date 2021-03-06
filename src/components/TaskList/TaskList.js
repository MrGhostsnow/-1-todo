import { useState, useEffect } from "react";
import BaseButton from "../BaseButton";
import FormCreate from "../FormCreate/FormCreate";
import FormSearch from "../FormSearch/FormSearch";
import { TaskService } from "../../services/TaskService";
import "./TaskList.css";
import { BsSearch } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";

function TaskList() {
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

  // State para 'aparecer' form de editar
  const [showEdit, setShowEdit] = useState(false);
  // State para 'aparecer' botão de voltar para home
  const [showBack, setShowBack] = useState(false);

  async function findAllTasks() {
    const tasks = await TaskService.getList();
    setTaskList(tasks);
    setShowBack(false);
  }

  //   Utiliza o Hook Effect para definir quando a função será chamada
  useEffect(() => {
    findAllTasks();
  }, [newTask, taskAtualizada]);

  async function findById(id) {
    const task = await TaskService.getById(id);
    setTaskList([task]);
  }

  async function create(task) {
    const newTask = await TaskService.create(task);
    setTaskList([newTask]);
  }

  async function editTask(id, edited_task) {
    const task_edited = await TaskService.updateById(id, edited_task);
    setTaskList({ ...task_edited });
  }

  async function deleteTask(id) {
    const task_deleted = await TaskService.deleteById(id);
    setTaskList({ ...task_deleted });
  }

  //   Captura a mudança do input de pesquisa
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  //   Encontrar a task pelo id
  const handleClick = (e) => {
    findById(task.task_id);
    setShowBack(true);
    // setTask({
    //   task_id: "",
    // }); // Apagar input
  };

  //   Voltar para Home
  const handleBackHome = (e) => {
    findAllTasks();
  };

  //   Captura a mudança do input de criar
  const handleChangeCreate = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  //   Captura a mudança do input de editar
  const handleChangeEdit = (e) => {
    console.log(taskAtualizada);
    setTaskAtualizada({ ...taskAtualizada, [e.target.name]: e.target.value });
  };

  const handleCreateTask = () => {
    const task_create = { ...newTask }; //Define a const como o objeto capturado e 'setado' na handleChangeCreate(newTask)
    create(task_create); //Chama a função create e define o objeto capturado como aquilo que vai ser criado e enviado para a API
    setNewTask({
      task: "",
    }); //'0' o input de criação
  };

  //Modifica o estado do modal de edição / chama o id com o id do objeto clicado
  const handleClickEdit = (e) => {
    setShowEdit(true);
    setTaskAtualizada({ ...taskAtualizada, id: e.target.id });
    findById(e.target.id);
  };

  //Pega o objeto que foi clicado através do id capturado na 'handleclickedit'/ edita a task através do crud
  const handleEditTask = () => {
    const task_edited = { ...taskAtualizada };
    const id = task_edited.id;

    delete task_edited.id;
    setShowEdit(false);
    editTask(id, task_edited);
    window.location.reload(true);
  };

  //Captura o evento ligado ao id do objeto e deleta
  const handleDeleteTask = (e) => {
    deleteTask(e.target.id);
    window.location.reload(true);
  };

  //Muda o estado para fechar o modal de edição
  const closeModal = () => {
    setShowEdit(false);
  };

  return (
    <div className="taskList_container">
      <h1>Task's</h1>
      {/* Form de criação */}
      <FormCreate
        className={"container_FormCreate"}
        onChange={handleChangeCreate}
        task_value={newTask.task}
        onClick={handleCreateTask}
        label={"Add new Task"}
      />

      {/* findById funcionando */}
      <FormSearch
        onChange={handleChange}
        task_value={task.task_id}
        className="btn-search"
        onClick={handleClick}
        label={<BsSearch />}
      />

      {/*Botão de voltar para pagina inicial / Funcionando */}
      {showBack ? (
        <BaseButton
          className="btn-back"
          label={<BiArrowBack />}
          onClick={handleBackHome}
        />
      ) : null}

      {/* Form de edição / Modal */}
      {showEdit ? (
        <Modal closeModal={closeModal}>
          <FormCreate
            className={"container_FormEdit"}
            onChange={handleChangeEdit}
            task_value={taskAtualizada.task}
            onClick={handleEditTask}
            label={"Edit"}
          />
        </Modal>
      ) : null}

      {taskList.map((task, index) => (
        <div key={index} className="card_Task">
          <div className="body_Task">
            <p className="card_Text">{task.id}</p>
            <p className="card_Text">{task.task}</p>
          </div>

          <BaseButton //Botão editar/ Funcionando
            id={task.id}
            type="button"
            className="btn-edit"
            label={<FaRegEdit />} //Adicionar icone
            onClick={handleClickEdit}
          />

          <BaseButton //Botão deletar/ Funcionando
            id={task.id}
            type="button"
            className="btn-delete"
            label={<BsTrashFill />} //Adicionar icone
            onClick={handleDeleteTask}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
