import React from 'react'
import './UserCard.css'


// import img1 from '../assets/rish.jpg'
// import img2 from '../assets/img.jpg'
// import img3 from '../assets/image.jpg'

const UserCard = (props) => {
  return (
          <div className='user-container'>
            <p className='user-name'>{props.name}</p>
            <img className ='user-image' src={props.image} alt={props.name} />
            <p className='user-desc'>{props.desc}</p>
          </div>
  )
}

export default UserCard