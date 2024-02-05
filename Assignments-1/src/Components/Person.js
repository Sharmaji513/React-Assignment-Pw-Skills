import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p>{props.name} is {props.age} years old</p>
        
    </div>
  )
}

export default Person