import React from 'react'
// import { UserContext } from '../App'
import { useContext } from 'react'
import {ThemeContext} from '../App'


const ChildC = () => {

 

    // const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext);


     function handleColor(){
          if(theme === 'light')
            setTheme('dark')
          else
            setTheme('light')
    }

    
    return (
    // <div>
    //     My name is : {user.name}
    // </div>



    <div>
      <button onClick={handleColor}> 
        Chnage Theme
      </button>
    </div>
  )
}

export default ChildC