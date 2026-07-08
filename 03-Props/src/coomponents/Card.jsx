import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.user}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, non.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
