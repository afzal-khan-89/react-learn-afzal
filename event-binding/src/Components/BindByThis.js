import React, { Component } from 'react'

class BindByThis extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello .."
        }
    }
    
    clciHander(){
        this.setState(
            {
                message:"Hi.. I am changed .. ! "
            },
            ()=>console.log(this.state.message)
        )

    }
    render() {
        return (
            <div>
                <p> {this.state.message} </p>
                <button onClick={this.clciHander.bind(this)}>change text</button>
            </div>
        )
    }
}

export default BindByThis
