import React, { Component } from 'react';
import './App.css';

class HomeComponent extends Component {

    constructor() {
        super();
        this.state = {
            title: "Mr",
            firstName: "James",
            lastName: "Bourne",
            count : 0
        }
        this.Boom= this.Boom.bind(this);
        this.changName= this.changName.bind(this);

    }

Boom(){
this.setState({
        count : this.state.count + 1
        
    });
    }

    changName(e){
        this.setState({title :   e.target.value})
    }
render() {
    return (<div>
       
            <input placeholder="Title" onChange={this.changName} name="Title" value = {this.state.title}/>
            
            <input type="text" placeholder="Count" name="count" value = {this.state.count}/>
            <button onClick={this.Boom} >Increase count</button>
       
    </div>
    )
};
}

export default HomeComponent;