import Button from "./BaseButton";
import BaseForm from "./BaseForm";

function FormCreate(props) {
  return (
    <div className="container_FormCreate">
      <BaseForm
        id="criar_task"
        type="text"
        onChange={props.onChange}
        name="task"
        value={props.task_value}
        completed={props.completed}
      />
      <Button
        type="button"
        className="btn_add"
        onClick={props.onClick}
        label={props.label}
      />
    </div>
  );
}
export default FormCreate;