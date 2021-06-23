import React, { Component } from 'react'
import BindByThis from './BindByThis'
import BindByArrFunInRndrMethod from './BindByArrFunInRndrMethod'
import BindingInConstructor from './BindingInConstructor'
import BindByArroFunction from './BindByArroFunction'

class Eventbinding extends Component {
    render() {
        return(
            <div>
                <h1>Bind by this key word  ..</h1>
                <BindByThis />
                <hr/>
                <h1>Bind by Arrow funciton in render method ..</h1>
                <BindByArrFunInRndrMethod />
                <hr/>
                <h1>Bind handler in constructor  ..</h1>
                <BindingInConstructor />
                <hr/>
                <BindByArroFunction text='Bindy by arro function ' />
            </div>
        ) 
     }
}
export default Eventbinding
