import BaseButton from "../BaseButton";
import BaseForm from "../BaseForm/BaseForm";
import "./FormCreate.css";

function FormCreate(props) {
  return (
    <div className={props.className}>
      <BaseForm
        id="criar_task"
        className=""
        type="text"
        onChange={props.onChange}
        name="task"
        value={props.task_value}
        completed={props.completed}
      />
      <BaseButton
        type="button"
        className="btn_add"
        onClick={props.onClick}
        label={props.label}
      />
    </div>
  );
}
export default FormCreate;
