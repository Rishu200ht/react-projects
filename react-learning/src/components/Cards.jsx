import React from 'react'

const Cards = (props) => {
  return (
    <div>
            <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
            <p>Value of name state inside the Crad : {props.name}</p>
    </div>
  )
}

export default Cards  