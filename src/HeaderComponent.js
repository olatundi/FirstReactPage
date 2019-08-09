import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class HeaderComponent extends Component {

    constructor() {

        super();
        this.state = {};
    }
    render() {
        return (<div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                    <Router>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/welcome" className="nav-link">Welcome To QA</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/todos" className="nav-link">Todo</Link>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                     </form>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/logout" className="btn btn-success my-2 my-sm-0">LogIn</Link>
                                    </li>
                        </ul>
                        </div>
                    </Router>
                </nav>



            </header><hr />
                {/* <p className="header">My second React App </p>

            <Router>
                <Route path= "/" exact component={HomeComponent} ></Route>
                <Route path= "/java" exact component={JavaComponent} ></Route>
                <Route path= "/" exact component={AboutUs} ></Route>
            </Router> */}
        </div>
            )
        };
    }
    
export default HeaderComponent;