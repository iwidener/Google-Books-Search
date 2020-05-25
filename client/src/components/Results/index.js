import React from "react";
import "./style.css";

export function Results({ children }) {
    return (
        <div className="listTitle">Results
            <div className="list-overflow-container">
                <ul className="list-group">{children}</ul>
            </div>
        </div>

    )
};

export function ResultsItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}