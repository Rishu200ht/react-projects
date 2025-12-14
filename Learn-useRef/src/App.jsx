import {useRef, useState, useEffect} from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();

  // function handleIncreaments(){
  //   setCount(count + 1);
  //     val.current = val.current + 1;
  //     console.log("Value is : ", val.current)

  // }

  // function chnageColor(){
  //   btnRef.current.style.backgroundColor = "red"
  // }


  // useEffect(()=>{
  //   console.log("this is run on every render");
  // })







  // Stop-watch-project-code...

  const [time, setTime] = useState(0);
    let timerRef = useRef(null);



  function startTimer(){
  timerRef.current = setInterval(() => {
      setTime(time => time + 1);
      
    }, 1000);

  }

   function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null;
    
  }

   function resetTimer(){
    stopTimer();
    setTime(0)

    
  }

 

  return (

    // <div>
    //   <button 
    //   ref = {btnRef}
    //   onClick={handleIncreaments}>
    //     increament
    //   </button>

    //   <br />
    //   <br />


    //   <button onClick={chnageColor}>
    //     chnage color of 1st button
    //   </button>

    //   <div>
    //     <p>Count is :{count}</p>
    //   </div>
    // </div>






    // stop-watch--project-code...


    <div>
      <h1>StopWatch : {time} Seconds</h1>

      <button onClick={startTimer}>
        Start
      </button>

      <br /> <br />

       <button onClick={stopTimer}>
        Stop
      </button>

      <br /> <br />

       <button onClick={resetTimer}>
        Reset
      </button>

    </div>
  )
}

export default App
