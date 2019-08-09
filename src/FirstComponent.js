import React, { Component } from 'react';
import './App.css';

class FirstComponent extends Component {

    constructor() {
        super();
        this.state = {
            title: "Mr",
            firstName: "James",
            lastName: "Bourne",
            count : 0
        }
        this.Boom= this.Boom.bind(this);
    }

Boom(){
this.setState({
        count : this.state.count + 1
        
    });
    }

render() {
    return (<div>
       
            <input placeholder="Title" name="Title" defaultValue = {this.state.title}/>
            <input type="text" placeholder="FirstName" name="firstName" defaultValue = {this.state.firstName}/>
            <input type="text" placeholder="LastName" name="lastName" defaultValue = {this.state.lastName}/>
            <input type="text" placeholder="Count" name="count" value = {this.state.count}/>
            <button onClick={this.Boom} >Increase count</button>
       
    </div>
    )
};
}

export default FirstComponent;