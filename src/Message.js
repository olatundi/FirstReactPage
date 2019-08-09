import React, { Component } from 'react';
import './App.css';


class Message extends Component {
    render() {
        return(
            <>
            <p class= "header"> {this.props.name} lives in  {this.props.address} </p>
            
            <br/>

            <br/>


            </>

        )
    };
}

export default Message;