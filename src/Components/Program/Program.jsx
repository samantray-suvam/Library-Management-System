import React from 'react'
import './Program.css'
import pro1 from '../../assets/logo2.jpg'
import pro2 from '../../assets/logo3.png'
import pro3 from '../../assets/logo4.jpg'
import pro4 from '../../assets/logo6.png'

const Books = () => {
  return (
    <div className='programs'>
      <div className="program">
      <button className='btn1'><img src={pro1}/></button>
        <div className="caption">
          <p>School Of Engineering</p>
        </div>
      </div>

      <div className="program">
      <button className='btn1'><img src={pro2}/></button>
        <div className="caption">
          <p>School Of Business</p>
        </div>
      </div>

      <div className="program">
      <button className='btn1'><img src={pro3}/></button>
        <div className="caption">
          <p>School Of Law</p>
        </div>
      </div>

      <div className="program">
        <button className='btn1'><img src={pro4}/></button>
        <div className="caption">
          <p>School Of Natural Science</p>
        </div>
      </div>
    </div>
  )
}

export default Books
