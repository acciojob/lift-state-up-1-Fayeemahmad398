import React from "react";

const ChildCom = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <button
        onClick={() => {
          props.state.setShowModal(props.state.showModal ? false : true);
        }}
      >
        Show Button
      </button>
      {props.state.showModal ? (
        <div>
          <h3>Modal Content</h3>
          <p>This is the modal content</p>
        </div>
      ) : null}
    </div>
  );
};

export default ChildCom;
