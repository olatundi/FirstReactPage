import React, { Component } from 'react';
import './App.css';


class Result extends Component {
    render() {
        return (
            <>
                <p class="header"> Name: {this.props.name}  </p>
                <p class="header"> Maths: {this.props.maths}  </p>
                <p class="header"> Physics: {this.props.phy}  </p>
                <p class="header"> Chem: {this.props.che}  </p>
                <p class="header"> Total: {this.total()} % </p>
                <p class="header"> Pass: {this.grade()}  </p>
            </>

        )
    };
    total() {
        let res = ((parseInt(this.props.maths) + parseInt(this.props.phy) + parseInt(this.props.che)) / 450) * 100
        return res.toFixed(1);
    }

    grade() {
        if (this.total() < 60)
            return "Fail!";
        else {
            return "Pass";
        }
    }
}

export default Result;