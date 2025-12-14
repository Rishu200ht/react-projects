import React from 'react'


const ColorSwitch = (props) => {
  return (
    <button onClick={(e)=>{
        
        e.stopPropagation();
        props.onChangeColor();
    }}>

        Click me!

    </button>
  )
}

export default ColorSwitch