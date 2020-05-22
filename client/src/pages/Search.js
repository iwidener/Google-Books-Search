// import React, { useState,useEffect } from "react";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import { Link } from "react-router-dom";

function Search() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h2>(React) Google Books Search</h2>
                        <h5>Search for and Save Books of Interest</h5>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default Search;
