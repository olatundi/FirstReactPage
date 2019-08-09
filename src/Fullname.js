import React, { Component } from 'react';
import './App.css';

class Fullname extends Component {

    // constructor(){
        // super();
    //     this.state = {
    //         formNames: {
    //             title:{
    //                 value:""
    //             },
    //             firstName:{
    //                 value:""
    //             },
    //             lastName:{
    //                 value:""
    //             }
    //         }
    //     }
    // }

    // changeHandler = event => {
      
    //     const name = event.target.name;
    //     const value = event.target.value;
      
    //     this.setState({
    //       formNames: {
    //           ...this.state.formNames,
    //           [name]: {
    //         ...this.state.formNames[name],
    //           value
    //         }
    //       }
    //     });
    // }

    render() {
        return(<div>
            <form name= "fullname"> 
            <input placeholder="Title" name="Title" />
            <input type="text" placeholder="FirstName" name="firstName" />
            <input type="text" placeholder="LastName" name="lastName"></input>
            </form>
        </div>
        )
    };
}

export default Fullname;