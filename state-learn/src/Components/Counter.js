import React, { Component } from 'react' 

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0,
            count1:0
        }
    }
    increaseCount(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }),
        ()=>console.log(this.state.count))
        console.log("count1 : "+this.state.county)
    }
    increaseCount1(){
        this.setState(
        {
            count1:this.state.count1+1
        },
        ()=>{
            console.log(this.state.count1)
        })
       
    }
    increaseCountMultiplTime(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
    }
    render(){
        return(
            <div>
                <h1>count1: {this.state.count1}</h1>
                <button onClick={()=>this.increaseCount1()}>click:</button>
                <h1>count: {this.state.count}</h1>
                <button onClick={()=>this.increaseCountMultiplTime()}>click</button>
            </div>
        )
    }
}
export default Counter;