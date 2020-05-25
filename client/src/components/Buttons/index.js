import React from "react";
import "./style.css";

export function SaveBtn(props) {
  return (
    <button {...props} className="save-btn btn-success" variant="outline-success">
      {props.children}
    </button>
  );
}

export function ViewBtn(props) {
  return (
    <button {...props} className="view-btn btn-info" variant="outline-info">
      {props.children}
    </button>
  );
}
