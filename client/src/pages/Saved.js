import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Results, ResultsItem } from "../components/Results";
import { DeleteBtn, ViewBtn } from "../components/Buttons";
import API from "../utils/API";
//import { Link } from "react-router-dom";

function Saved() {

    const [googlebooks, setGooglebooks] = useState([]);
   // const [formObject, setFormObject] = useState([]);

    useEffect(() => {
        loadGooglebooks()
    }, [])

    function loadGooglebooks() {
        API.getGooglebooks()
            .then(res => setGooglebooks(res.data))
            .catch(err => console.log(err));
    };

    function viewGooglebook(url) {
        API.viewGooglebook(url)
            .then(res => loadGooglebooks())
            .cath(err => console.log(err));
    };

    function deleteGooglebook(id) {
        API.deleteGooglebook(id)
            .then(res => loadGooglebooks())
            .catch(err => console.log(err));
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h2>(React) Google Books Search</h2>
                        <h5>Search for and Save Books of Interest</h5>
                    </Jumbotron>
                    {googlebooks.length ? (
                        <Results>
                            {googlebooks.map(googlebook => {
                                return (
                                    <ResultsItem key={googlebook._id}>
                                        {/* <a href={"/saved/" + googlebook._id}> */}
                                            <Container>
                                                <Row>
                                                    <Col size="xs-4 sm-2">
                                                        <img src={googlebook.image} alt={googlebook.title} />
                                                    </Col>
                                                    <Col size="xs-8 sm-9">
                                                        <h3>{googlebook.title}</h3>
                                                        <p>Written by {googlebook.authors}</p>
                                                        <p>{googlebook.description}</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        {/* </a> */}
                                        <DeleteBtn onClick={() => deleteGooglebook(googlebook._id)}>Delete</DeleteBtn>
                                        <ViewBtn onClick={() => viewGooglebook(googlebook.link)}>View</ViewBtn>
                                    </ResultsItem>
                                )
                            }
                            )}
                        </Results>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    )
};

export default Saved;
