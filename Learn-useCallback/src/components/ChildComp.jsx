import React from 'react'

const ChildComp = React.memo(
    (props) => {

    console.log("Child component re-render again")
  return (
    <div>
      <button>
        {props.buttonName}
      </button>
    </div>
   )
 }
)

export default ChildComp
