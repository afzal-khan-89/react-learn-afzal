import React, { Component } from 'react';


class ClickEventLearnInClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Hungry rabbit jumps ... '
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    // clickEvent(){
    //     // this.setState({
    //     //     message:'Hungry rabbit runs ...'
    //     // })
    //     // console.log(this.state.message)
    //     this.setState(
    //         {
    //             message:'hungry rabbit runs ...'
    //         },
    //         ()=>{alert(this.state.message)
    //             console.log(this.state.message)}
    //         )
    // }
    clickEvent = ()=>{
        this.setState(
            {
                message:'Hungry rabbit runs ...'
            },
            ()=>{
                    alert(this.state.message)
                    console.log(this.state.message)
                }
            )
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/*<button onClick={this.clickEvent.bind(this)}>clickMe</button>*/}
                {/* <button onClick={()=>this.clickEvent()}>clickMe</button> */}
                <button onClick={this.clickEvent}>clickMe</button>
            </div>
        )
    }
}
export default ClickEventLearnInClass;