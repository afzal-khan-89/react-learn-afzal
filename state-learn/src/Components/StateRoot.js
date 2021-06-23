import React from 'react'
import SetStateLearn from './SetStateLearn'
import StateLearn from './StateLearn'
import Counter from './Counter'

const StateRoot=()=>{
    return(

        <div>
            <SetStateLearn />
            <hr/>
            <StateLearn />
            <hr/>
            <Counter />
        </div>
    )
}
export default StateRoot