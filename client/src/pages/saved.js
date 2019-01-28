import React, { Component } from "react";
import Navbar from './../components/Navbar';
import Jumbotron from './../components/Jumbotron';

class Saved extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <Jumbotron>
                    <h1>A New Chapter</h1>
                    <h3>Find & Save All Of Your Favorite Books!</h3>
                </Jumbotron>
                <h1>This is the saved page</h1>
            </div>
        )
    }
}

export default Saved;