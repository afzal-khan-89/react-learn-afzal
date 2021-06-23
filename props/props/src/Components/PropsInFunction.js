import React from 'react'

export const PropsInFunction=(props)=>{
    return(
       <div>
           <h1>Book :  {props.bookName} {'\u00A0'} Author : {props.author} </h1>
           {props.children}
       </div>
    )
}