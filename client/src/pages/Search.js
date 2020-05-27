import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { SearchBtn, TextArea } from "../components/Input";
import { Results, ResultsItem } from "../components/Results";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { SaveBtn, ViewBtn } from "../components/Buttons";
import { Col, Row, Container } from "../components/Grid";
//import Thumbnail from "../components/Thumbnail";
//import axios from "axios"

function Googlebooks() {
   
    //const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
    const [googlebooks, setGooglebooks] = useState([]);
    const [formObject, setFormObject] = useState([]);
    // const [apiKey] = useState("")

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
            .then(res => loadGooglebooks())
            .cath(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSearch(event) {
        event.preventDefault();
        // if (formObject.title && formObject.author) {
        //     API.saveGooglebook({
        //         image: formObject.image,
        //         title: formObject.title,
        //         author: formObject.author,
        //         description: formObject.description
        //     })
        //         .then(res => loadGooglebooks())
        //         .catch(err => console.log(err));
        // }

        // axios.get("https://www.googleapis.com/books/v1/volumes?q="+googlebooks+"&key="+apiKey+"&maxResults=10")
        // .then(data => {
        //     const formattedBooks = data.data.items.map(item => {
        //         if(item.id && item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.infoLink && item.volumeInfo.description && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
        //           const formattedItem = {
        //               _id: item.id,
        //               title: item.volumeInfo.title,
        //               authors: item.volumeInfo.authors,
        //               link: item.volumeInfo.infoLink,
        //               description: item.volumeInfo.description,
        //               image: item.volumeInfo.imageLinks.thumbnail
        //           }  
        //           return formattedItem;
        //         }
        //         return false;
        //     }) 
        //     console.log(formattedBooks);
        //     setGooglebooks(formattedBooks);
        //     console.log(data.data.items)
        // })
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

                                    <SaveBtn onClick={() => saveGooglebook(googlebook)}>Save</SaveBtn>

                                    <ViewBtn onClick={() => viewGooglebook(googlebook.link)}>View</ViewBtn>
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
