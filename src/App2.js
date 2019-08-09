import React, { Component } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import HomeComponent from './HomeComponent';
import JavaComponent from './JavaComponent';
import {BrowserRouter as Router, Route } from "react-router-dom"

class App2 extends Component {
    render() {
        return(<div>
            <p class="header">My second React App </p>

            <Router>
                <Route path= "/" exact component={HomeComponent} ></Route>
                <Route path= "/java" exact component={JavaComponent} ></Route>
                <Route path= "/" exact component={AboutUs} ></Route>
            </Router>
        </div>
        )
    };
}

export default App2;
