import React, { Component } from 'react';
import './App.css';

class Address extends Component {
    render() {
        return(<div>
            <form name= "address"> 
            <input type="number" placeholder="StreetNo" name="StreetNo" value=""></input>
            <input type="text" placeholder="StreetName" name="StreetName" value=""></input>
            <input type="text" placeholder="City" name="City" value=""></input>
            </form>
        </div>
        )
    };
}

export default Address;