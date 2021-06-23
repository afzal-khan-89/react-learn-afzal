import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message:'message ...'
        }
    }
    
    greetParent = (childMessage)=>{
        this.setState(
            {
                message:`message from child :  ${childMessage}`
            },
            ()=>console.log(this.state.message)
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <Child greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
