import React from 'react'

const PropFunctionExt = ({name, age, email})=>{
    //or const{name, age, email}
    return(           
        <div>
            <h1> name : {name}  age  : {age } email : {email}</h1>
        </div>
    )
}

export default PropFunctionExt