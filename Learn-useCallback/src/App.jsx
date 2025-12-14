import ChildComp from './components/ChildComp'
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);



  function handleCount(){
    setCount(count + 1);
  }
  

  return (
    <div>
      <div>
        count : {count}
      </div>

      <br />

      <div>
        <button onClick={handleCount}>
          Increment
        </button>
      </div>

       <br /><br />

       <div>
        <ChildComp buttonName = "Click me"/>
       </div>
    </div>
  );
}

export default App
