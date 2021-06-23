import React, { Component } from 'react'


class PropsInClass extends Component{

    render(){
        return(
            <div>
                <h1>Book :  {this.props.bookName} Author : {this.props.author} </h1>
                {this.props.children}
            </div>
        )
    }
}
export default PropsInClass