import React, { Component } from "react"

class SetStateLearn extends Component{
    constructor(){
        super()
        this.state = {
            demo_text:'react is awesome ... '
        }
    }
    changeText(){
        this.setState({
            demo_text:"react is beautiful ..."
        })
    }
    render(){
        return(
            <div>
                <h1>test message {this.state.demo_text}</h1>
                <button onClick={()=>this.changeText()}>click</button>
            </div>
        )
    }
}
export default SetStateLearn