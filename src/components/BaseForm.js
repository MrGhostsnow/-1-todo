
function BaseForm(props) {
    return (
      <div className="container_BasedForm">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          onChange={props.onChange}
          name={props.name}
          completed={props.completed}
          value={props.value}
        />
      </div>
    );
  }
  export default BaseForm;