import React from 'react'

function Child(props) {
    return (
        <div>
          <p>Say hello to parent </p> 
          <button onClick={()=>props.greetParent('hi parent')}>click</button> 
        </div>
    )
}
export default Child