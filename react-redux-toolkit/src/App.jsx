
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import {increment, decrement, reset, incrementByAmount} from './features/counter/counterSlice'
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

      function handleClickIncreament(){
        dispatch(increment());
      }

      function handleClickDecreament(){
        dispatch(decrement());
      }

      function handleClickReset(){
        dispatch(reset());
      }

      function handleIncAmountClick(){
        dispatch(incrementByAmount(amount));
      }
  return (

      <div className='container'>
        
        <button onClick={handleClickIncreament}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleClickDecreament}>-</button>
        <br />
        <br />

        <button onClick={handleClickReset}>Reset</button>
        <br />
        <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>

        <br />
        <br />
        <button onClick={handleIncAmountClick}>Inc by Amount</button>
      </div>    
  )
}

export default App
