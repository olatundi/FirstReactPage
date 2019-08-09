
import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import App from "./App"

export default ({handleClose, show, handleChange, post }) => {
    let showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
    
   
        <div className={showHideClassName} id="modalUpdate" tabIndex="-1" role="dialog" aria-labelledby="myModLabel" >
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Edit Trainee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                        <i className="dashboard prefix grey-text"></i>
                        <input type="text" name="name" className="form-control " onChange={handleChange} placeholder="Enter trainee name" defaultValue={post.name}/>
                        <i className="dashboard prefix grey-text"></i>
                        <input type="text" name="city" className="form-control " onChange={handleChange} placeholder="Enter trainee city" defaultValue={post.city}/>
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-success" onClick={ handleClose}>Update Trainee</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        
    </div>
 
 

    )
};

