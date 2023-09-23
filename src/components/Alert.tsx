interface props {
  hideAlert: () => void;
}

const Alert = (props: props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Hey Der dis my alert</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.hideAlert}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
