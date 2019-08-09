import React, { Component } from 'react';
import './App.css';

class AboutUs extends Component {

    constructor() {
        super();
        this.state = {
            name: "James",
           
            phone : "0787"
        }
        this.changeName= this.changeName.bind(this);
        this.changePhone= this.changePhone.bind(this);

    }



    changeName(e){
        this.setState({name: e.target.value})
    }

    changePhone(e){
        this.setState({phone: e.target.value})
    }
render() {
    return (<div>
       
            <input placeholder="Title" onChange={this.changeName} name="Name" value = {this.state.name}/>
            <input placeholder="Title" onChange={this.changePhone} name="Phone" value = {this.state.phone}/>

               
    </div>
    )
};
}

export default AboutUs;