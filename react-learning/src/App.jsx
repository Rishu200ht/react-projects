
import './app.css'
import UserCard from './components/UserCard.jsx'

import img1 from './assets/rish.jpg'
import img2 from './assets/img.jpg'
import img3 from './assets/image.png'
import Counter from './components/Counter.jsx'

import Card from './components/Card'
import { useState } from 'react'

import Button from './components/Button.jsx'
import Cards from './components/Cards.jsx'
import LoginBtn from './components/LoginBtn.jsx'
import LogoutBtn from './components/LogoutBtn.jsx'


function App() {

    // const[count, setCount] = useState(0);

    // function handleClick(){
    //   setCount(count+1);
    // }


    // const[name, setName] = useState('');


    const[isLoggedIn, setLoggedIn] = useState(true);


  // return (
    // <div container>
    //   {/* <UserCard name = "Rishu Agarwal" desc = "Cyber Security" image={img1}/>
    //   <UserCard name = "Sanidhya Garg" desc = "Java Developer" image={img2}/>
    //   <UserCard name = "Ritik sharma" desc = "Chhappri Ladka" image={img3}/> */}


    //   <Counter />


    // </div>

    // <div>
    //   <Card name="Rishu Agarwal">
    //     <h1>Best web dev course is here</h1>
    //     <p>trying to be consistent in this course totally</p>
    //     <p>we will complete the course very soon</p>
    //   </Card>
    // </div>



    // <div>
    //       <h1>{count}</h1>
    //      <Button handleClick = {handleClick} text = "Click me!"/>
        
    // </div>




    // <div>
    //   <Cards name={name} setName={setName}/>
    //   <p>Value of name state variable inside the card : {name}</p>
    // </div>
   


 

      // if(isLoggedIn){
      //   return (
      //     <LogoutBtn />
      //   )
      // }
      // else{
      //   return (
      //     <LoginBtn />
      //   )
      // }


      return(
        <div>
          
           {isLoggedIn ? <LoginBtn /> : <LogoutBtn />}

        </div>
           
      )

}

export default App
