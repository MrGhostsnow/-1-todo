

function BaseButton(props) {
  return (
        <button
        id={props.id}
          type={props.type}
          onClick={props.onClick}
          className={props.className}
        >
          {props.label}
        </button>
      );
}

export default BaseButton