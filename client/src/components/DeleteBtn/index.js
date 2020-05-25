import React from "react";
import "./style.css";

export function DeleteBtn(props) {
  return (
    <button {...props} className="delete-btn btn-danger" variant="outline-danger">
      {props.children}
    </button>
  );
}

