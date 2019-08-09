import React, { Component } from 'react';
import './App.css';
import Fullname from './Fullname';
import Address from './Address';
import Message from './Message';
import Result from './Result';
import FirstComponent from './FirstComponent';

class Details extends Component {
    render() {
        return(
            <>
            <p class= "header">Your Details</p>
            <Message name= "Aktar" address = "London"/>
            <br/>
            <Message name= "Pierre" address = "Little Bookham"/>
            <Result name="Shafeeq" maths = "90" che="40" phy="70"/>
            <FirstComponent/>

            <Fullname/>
            <br/>
            <Address/>
            </>
        )
    };
}

export default Details;