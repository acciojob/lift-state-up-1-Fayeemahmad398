import { useState } from "react";
import ChildCom from "./ChildCom";
import React from "react";

const ParentCom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildCom state={{ showModal: showModal, setShowModal: setShowModal }} />
    </div>
  );
};
export default ParentCom;
