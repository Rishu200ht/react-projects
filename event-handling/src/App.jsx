
// import './App.css'

// function App() {

//   function handleClick(){
//     alert("I have clicked")
//   }

//   function handleMouseOver(){
//     alert("you curser is on tha para")
//   }

//   function handleInputChange(e){
//     console.log("value of input variable", e.target.value);
//   }

//   function handleSubmit(e){
//     e.preventDefault(); 
//     alert("form is submitted");
//   }


//   return (
//           <div>

//             <form onSubmit={handleSubmit}>
//                 <input type="text" onChange={handleInputChange}/>
//                 <button type='submit'>Submit</button>
//             </form>

//             <p onMouseOver={handleMouseOver}>Hi, I am para</p>

//             <button onClick={handleClick}>Click me!</button>
            
//           </div>
//   )
// }

// export default App




import React, { use, useState } from 'react'
import ColorSwitch from './components/ColorSwitch'





const App = () => {

      const[count, setCount] = useState(0);

      function handleClickOutside(){
        setCount(count => count + 1);
      }

      function getColorValue(){
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;

      }

      function handleColorChange(){
        const bodyStyle = document.body.style;
        bodyStyle.backgroundColor = getColorValue();

      }

  return (
    
      <div style = {{width : '100%', height : '100%', backgroundColor : "red"}}onClick={handleClickOutside}>

        <ColorSwitch onChangeColor = {handleColorChange}/>

      <br />
      <br />

      <h3 style={{color : "white"}}>No. of clicks on the page : {count}</h3>

      </div>

  )
}

export default App
