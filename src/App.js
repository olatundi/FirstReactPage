import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./HeaderComponent"
import DataService from "./DataService"
// import EntryFormComponent from "./EntryFormComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import EntryFormComponent from './EntryFormComponent';
import UpdateModal from './UpdateModal';
import UpdateForm from './UpdateForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        city: "", 
        id: ""
      },
      show: false,
      id: 0,
      records: []
    };
    let promise = DataService.retrieveShowAllRecords();
    promise.then(response => {
      this.setState({
        records: response.data
      })
    })
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {

    this.setState(prevState => ({
      records: [...prevState.records, prevState.post],
      post: { name: "", city: "" },
      show: false
    }));

    DataService.updateRecord(this.state.id, this.state.post.name, this.state.post.city).then(() => {
      let promise = DataService.retrieveShowAllRecords();
      promise.then(response => {
        this.setState({
          records: response.data
        })
      })
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      records: [...prevState.records, prevState.post],
      post: { name: "", city: "" }
    }));

    DataService.createRecord(this.state.post.name, this.state.post.city).then(() => {
      let promise = DataService.retrieveShowAllRecords();
      promise.then(response => {
        this.setState({
          records: response.data
        })
      })
    });
  };

  handleUpdate = e => {
    e.preventDefault();

    this.setState(prevState => ({
      records: [...prevState.records, prevState.post],
      post: { name: "", city: "" , id :""},
      show: false
    }));

    DataService.updateRecord(this.state.post.id, this.state.post.name, this.state.post.city).then(() => {
      let promise = DataService.retrieveShowAllRecords();
      promise.then(response => {
        this.setState({
          records: response.data
        })
      })
    });
  };

  deleteRecord(id) {
    DataService.deleteRecord(id);
  }

  updateRecord(id, name, city) {
    DataService.updateRecord(id, name, city);
  }

  render() {
    return (
      <div >
        <HeaderComponent />
        <EntryFormComponent handleChange={this.handleChange} post={this.state.post} handleSubmit={this.handleSubmit} />
        
        <div className="container">
          <h1>QA Consulting, Students Information System</h1>

          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>Operations</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.records.map((record, i) => {
                  return (
                    <tr key={"A" + i}>
                      <td> {record.id}</td>
                      <td> {record.name}</td>
                      <td> <button className="btn btn-danger" onClick={() => {
                        this.deleteRecord(record.id).then(() => {
                          let promise = DataService.retrieveShowAllRecords();
                          promise.then(response => {
                            this.setState({
                              records: response.data
                            })
                          })
                        });
                      }}>Delete</button>
                        <button className="btn btn-warning" onClick={this.showModal}>Update</button>
                      <UpdateModal handleChange={this.handleChange} show={this.state.show} post={this.state.post} handleClose={this.hideModal} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <UpdateForm handleChange={this.handleChange} post={this.state.post} handleUpdate={this.handleUpdate}/>
        </div>
      </div>
    );

  }

}

export default App;
