import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BindByArrFunInRndrMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'hello ...'
        }

    }
    changeEvent(){
        this.setState(
            {
                message:'hi there .. I am changed !'
            },
            ()=>console.log(this.state.message)
        )
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=>this.changeEvent()}>changeText</button>
            </div>
        );
    }
}

BindByArrFunInRndrMethod.propTypes = {

};

export default BindByArrFunInRndrMethod;