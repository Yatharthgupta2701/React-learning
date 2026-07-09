import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className='card'>

      <div className="top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10" alt="" />
        <button>Save <Bookmark size={10} /></button>
      </div>

      <div className="center">
        <h3>Amazon <span>5 Days ago</span> </h3>
        <h2>Senior UI/UX Developer</h2>
        <div className='tag'>
          <h4>Part-Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
        <button>Apply Now</button>
      </div>

    </div>
  )
}

export default Card
