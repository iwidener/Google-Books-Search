// import React, { useState,useEffect } from "react";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import NavbarSearch from "../components/NavbarSearch";
import { Col, Row, Container } from "../components/Grid";

// import { Link } from "react-router-dom";

function Search() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h2>(React) Google Books Search</h2>
                        <h4>Search for and Save Books of Interest</h4>
                    </Jumbotron>

                    <NavbarSearch/>
                    
                </Col>
            </Row>
        </Container>
    )
};

export default Search;
