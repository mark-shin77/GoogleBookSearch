import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Book from "../components/BookInfo";
import { List } from "../components/BookList";
import API from "../utils/API";

class Main extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for you favorite book to begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "Looks like there are no new books with that title, Try again!"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <div>
                <Container fluid="fluid">
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1 className="text-center">A New Chapter</h1>
                                <h4 className="text-center">Find & Save All Of Your Favorite Books!</h4>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Card title="Search Book Title">
                                <SearchForm 
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    q={this.state.q}
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Card title="Results">
                                {this.state.books.length ? (
                                    <List>
                                        {this.state.books.map(book => (
                                            <Book
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                subtitle={book.volumeInfo.subtitle}
                                                link={book.volumeInfo.infoLink}
                                                authors={book.volumeInfo.authors.join(", ")}
                                                description={book.volumeInfo.description}
                                                image={book.volumeInfo.imageLinks.thumbnail}
                                                Button={() => (
                                                    <button
                                                        onClick={() => this.handleBookSave(book.id)}
                                                        className="btn btn-outline-info ml-2"
                                                    >
                                                        Save
                                                    </button>
                                                )}
                                            />
                                        ))}
                                    </List>
                                ) : (
                                        <h3 className="text-center">{this.state.message}</h3>
                                    )}

                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        )
    }
}

export default Main;