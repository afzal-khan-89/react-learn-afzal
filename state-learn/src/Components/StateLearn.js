import React, {Component} from 'react'

class StateLearn extends Component{
    constructor(){
        super()
        this.state = {
            demo_text:'react is awesome ... '
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.demo_text}</h1>
            </div>          
        )
    }
}
export default StateLearn



