// import { createContext, useState } from 'react'
// import './App.css'
// import ChildA from './components/ChildA'



// // step-1 : Create Context
// const UserContext = createContext();
// // step-2 : Wrap all the child inside a provider
// // srep-3 : pass value
// // step-4 : consume the values inside the consumer

// function App() {

//   const [user, setUser] = useState({name : "Rishu"});


//   return (
//       <>
//       <UserContext.Provider value={user}>
//         <ChildA />
//       </UserContext.Provider>
      
//     </>
//   )
// }

// export default App
// export {UserContext}





// Question..................




import {createContext, useState } from 'react'
import ChildA from'./components/ChildA'
import './App.css'

const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('light')

  return (

   <ThemeContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{backgroundColor : theme==='light' ? 'beige' : 'pink'}}>
            <ChildA />
    </div>
    
   </ThemeContext.Provider>
    
  )
}

export default App
export {ThemeContext};

