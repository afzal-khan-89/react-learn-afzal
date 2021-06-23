import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BindByArroFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'hello ...'
        }

    }
    onChange = ()=>{
        this.setState(
            {
                message : 'hi there ... '
            },
            ()=>console.log(this.state.message)
        )
    }
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.state.message}</p>
                <button onClick={this.onChange}>changeText</button>
            </div>
        );
    }
}


export default BindByArroFunction;