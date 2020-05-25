import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { SearchBtn, TextArea } from "../components/Input";
import { Results, ResultsItem } from "../components/Results";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { SaveBtn, ViewBtn } from "../components/Buttons";
import { Col, Row, Container } from "../components/Grid";

function Googlebooks() {
    const [googlebooks, setGooglebooks] = useState([]);
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadGooglebooks()
    }, [])

    function loadGooglebooks() {
        API.getGooglebooks()
            .then(res =>
                setGooglebooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSearch(event) {
        event.preventDefault();
        if (formObject.title && formObject.authors) {
            API.saveGooglebook({
                title: formObject.title,
                authors: formObject.author,
                description: formObject.description
            })
                .then(res => loadGooglebooks())
                .catch(err => console.log(err));
        }
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
                            placeholder="Search for a Googlebook"
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
                            {googlebooks.map(googlebooks => (
                                <ResultsItem key={googlebooks._id}>
                                    {/* <Link to={"/googlebooks/" + googlebooks.id}> */}
                                        {googlebooks.title} by {googlebooks.authors}
                                        {googlebooks.description}
                                    {/* </Link> */}

                                    <SaveBtn onClick={() => { }}>Save</SaveBtn>

                                    <ViewBtn onClick={() => { }}>View</ViewBtn>
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
