import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { SearchBtn, TextArea } from "../components/Input";
import { Results, ResultsItem } from "../components/Results";
import API from "../utils/API";
import { SaveBtn, ViewBtn } from "../components/Buttons";
import { Col, Row, Container } from "../components/Grid";

function Googlebooks() {
   
    const [googlebooks, setGooglebooks] = useState([]);
    const [formObject, setFormObject] = useState([]);

    useEffect(() => {
        loadGooglebooks()
    }, [])

    function loadGooglebooks() {
        API.getGooglebooks()
            .then(res => setGooglebooks(res.data))
            .catch(err => console.log(err));
    };

    function saveGooglebook(bookData) {
        API.saveGooglebook(bookData)
            .then(res => loadGooglebooks())
            .catch(err => console.log(err));
    };

    function viewGooglebook(url) {
        API.viewGooglebook(url)
            .then(res => loadGooglebooks(googlebooks.link))
            .cath(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSearch(event) {
        event.preventDefault();
        API.searchGooglebook(formObject.title)
        .then(res => setGooglebooks(res.data))
        .catch(err => console.log(err));
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h2>(React) Google Books Search</h2>
                        <h4>Search for and Save Books of Interest</h4>
                    </Jumbotron>

                    <form>
                        <h5>Book</h5>
                        <TextArea
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        >
                        </TextArea>
                        <SearchBtn
                            onClick={handleFormSearch}
                        >
                            Search
                        </SearchBtn>
                    </form>
                    {googlebooks.length ? (
                        <Results>
                            {googlebooks.map(googlebook => (
                                <ResultsItem key={googlebook._id}>
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
                                    <SaveBtn onClick={() => saveGooglebook(googlebook._id)}>Save</SaveBtn>
                                    <ViewBtn onClick={() => viewGooglebook(googlebooks.link)}>View</ViewBtn>
                                </ResultsItem>
                            ))}
                        </Results>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    )
};

export default Googlebooks;
