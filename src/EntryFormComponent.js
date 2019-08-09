import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import App from "./App"

export default ({ handleChange, handleSubmit, post }) => {


    return (<div className="form-container">
        <form>
            <div className="form-group">
                <i className="dashboard prefix grey-text"></i>
                <input type="text" name="name" className="form-control col-10" onChange={handleChange} placeholder="Enter trainee name" value={post.name}  />
                <i className="dashboard prefix grey-text"></i>
                <input type="text" name="city" className="form-control col-10" onChange={handleChange} placeholder="Enter trainee city" value={post.city} />

                <div className="justify-content-center">
                    <button className="btn btn-success" onClick= { handleSubmit }>Create Trainee</button>
                </div>
            </div>
        </form>
    </div>

    )
};


