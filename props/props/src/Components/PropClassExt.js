import React, { Component, Copmonent } from 'react'


class PropClassExt extends Component{
    constructor(){
        super()

    }
    render(){
        const {name, age, email}=this.props
        return (
            
            <div>
                <h1> name : {name}  age  : {age } email : {email}</h1>
            </div>
        )
    }
}
export default PropClassExt