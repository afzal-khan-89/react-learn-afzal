import React, { Component } from 'react';


class BindingInConstructor extends Component {
    constructor(props) {
        super(props);
        this.state={
            message :'hello ....'
        }
        this.changeEvent = this.changeEvent.bind(this)
    }
    changeEvent(){
        this.setState(
            {
                message:'i am chaged ... !'
            },
            ()=>console.log(this.state.message)
        )

    }
    render() {
        const {text} = this.props
        return (
            <div>
                <h1>{text}</h1>
                <p>{this.state.message}</p>
                <button onClick={this.changeEvent}>changeText</button>
            </div>
        );
    }
}

export default BindingInConstructor;