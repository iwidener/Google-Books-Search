import React from "react";
import "./style.css"


function NavbarSearch({ props }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">

            <div className="navbar-search">

                <div className="title">
                    <h4>Book Search</h4>
                    <h5>Book</h5></div>
                
                        <div className="input-group input-group-lg" >
                            <input className="form-control" type="text" placeholder="Search" {...props} />
                            <button className="btn btn-success" variant="outline-success">Search</button>
                        </div>
                    
            </div>
        </nav>
    )
};

export default NavbarSearch;

