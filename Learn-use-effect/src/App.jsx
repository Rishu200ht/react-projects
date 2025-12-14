import { useEffect } from "react"
import { useState } from "react"



function App() {
  const[count, setCount] = useState(0);
  const[total, setTotal] = useState(1);



    // Varaition-1 runs on every render 

    // useEffect(() => {
    //   alert("I will run on each render")
    // })


    // Variation-2 that runs on only first render

    // useEffect(()=>{
    //   alert("that runs on only first render")
    // }, [])


    // Variation-3 I will run every time when count is updated

    // useEffect(() => {
    //     alert("I will run every time when count is updated")
    // }, [count])


    // Variation-4 multiple dependencies

    // useEffect(() => {
    //   alert("I will run every time when count/total is updated")
    // }, [count, total])
    
    


  function handleClick(){
    setCount(count+1);
   
  }
    

  function handleClickTotal(){
       setTotal(total+1)
  }
  

  return (
    <div>
      <button onClick={handleClick}>
        clicl me!
      </button>
      <br />
      count is : {count}

      <br />

      <button onClick={handleClickTotal}>
        clicl me!
      </button>
      <br />
      total is : {total}
    </div>
  )
}

export default App
