import React, { useRef } from 'react'
import './Authors.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.png'
import user_4 from '../../assets/user4.jpg'
import user_5 from '../../assets/user5.jpg'

const Authors = () => {

    const slider = useRef();
    let tx=0;

    const slideForward = () =>{
        if(tx  > -50){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    } 
    const slideBackward = () =>{
        if(tx  < 0){
            tx += 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='authors' id='author'>
      <img src={next_icon} className='next-btn' onClick={slideForward} />
      <img src={back_icon} className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1}/>
                        <div>
                            <h3>Robert Greene</h3>
                            <span>Workshire, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eum ea voluptates maiores unde, ratione itaque dolor hic molestias omnis impedit blanditiis dolorem suscipit laboriosam nesciunt repudiandae sint non.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2}/>
                        <div>
                            <h3>Robert Greene</h3>
                            <span>Workshire, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eum ea voluptates maiores unde, ratione itaque dolor hic molestias omnis impedit blanditiis dolorem suscipit laboriosam nesciunt repudiandae sint non.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3}/>
                        <div>
                            <h3>Robert Greene</h3>
                            <span>Workshire, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eum ea voluptates maiores unde, ratione itaque dolor hic molestias omnis impedit blanditiis dolorem suscipit laboriosam nesciunt repudiandae sint non.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4}/>
                        <div>
                            <h3>Robert Greene</h3>
                            <span>Workshire, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eum ea voluptates maiores unde, ratione itaque dolor hic molestias omnis impedit blanditiis dolorem suscipit laboriosam nesciunt repudiandae sint non.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_5}/>
                        <div>
                            <h3>Robert Greene</h3>
                            <span>Workshire, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eum ea voluptates maiores unde, ratione itaque dolor hic molestias omnis impedit blanditiis dolorem suscipit laboriosam nesciunt repudiandae sint non.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Authors
