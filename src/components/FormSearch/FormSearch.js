import BaseForm from "../BaseForm/BaseForm";
import Button from "../BaseButton";
import "./FormSearch.css";

function FormSearch(props) {
  return (
    <div className="container_FormSearch">
      <BaseForm
        id="findById"
        type="text"
        className="form-control"
        onChange={props.onChange}
        name="task_id"
        value={props.task_value}
        completed={props.completed}
      />
      <Button
        type="button"
        className={props.className}
        onClick={props.onClick}
        label={props.label}
      />
    </div>
  );
}

export default FormSearch;
