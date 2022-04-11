import React from 'react'
function Jokes(props){
    return (
        <div>
            <h3>Setup: {props.setup}</h3>
            <p>Puchline: {props.punchline}</p>
        </div>
    )
}
export default Jokes