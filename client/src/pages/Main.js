import React, { Component } from "react";
import Navbar from '../components/Navbar';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import { List } from "../components/BookList";
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
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
                            <Card title="Book Search">
                                <SearchForm />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Card title="Results">
                            <List>
                                {/* {this.state.books.map(books => {
                                })} */}
                            </List>
                            </Card>
                        </Col>
                    </Row>
                    
                <Footer />
                </Container>
            </div>
        )
    }
}

export default Main;