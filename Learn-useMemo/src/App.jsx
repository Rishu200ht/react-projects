
import { use, useState, useMemo} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num){
    for(let i=0; i<=100; i++){}
    return num*2
  }


  let doubleValue  = useMemo(()=> expensiveTask(input), [input])
 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>count : {count}</div>

      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>double value is : {doubleValue}</div>
    </div>
  );
}

export default App
