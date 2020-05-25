import React from "react";
import "./style.css"


export function Input(props) {

    return (
        <div className="navbar-search">
            <input className="form-control" {...props} /></div>
    );
}

export function TextArea(props) {
    return (
        <div className="input-group input-group-lg" >
            <input className="form-control" type="text" placeholder="Search" {...props} /></div>
    );
}

export function SearchBtn(props) {
    return (
        <button {...props} className="btn btn-success" variant="outline-success">
            {props.children}
        </button>
    )
};

