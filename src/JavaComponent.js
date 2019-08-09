import React, { Component } from 'react';
import './App.css';

class JavaComponent extends Component {

    constructor() {
        super();
        this.state = {
            name: "Java",
           
            version : "8"
        }
        this.changeName= this.changeName.bind(this);
        this.changever= this.changeVer.bind(this);

    }



    changeName(e){
        this.setState({name : e.target.value})
    }

    changeVer(e){
        this.setState({version: e.target.value})
    }
render() {
    return (<div>
            <label>Name:</label>
            <input placeholder="Title" onChange={this.changeName} name="Name" value = {this.state.name}/>
            <input placeholder="Title" onChange={this.changeVer} name="Version" value = {this.state.version}/>

               
    </div>
    )
};
}

export default JavaComponent;