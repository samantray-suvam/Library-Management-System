import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  // logic to make the navbar transit
  const [sticky, setSticky]=useState(false);

  // this function will be executed only once, when the page is loaded
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img style={{width:70, height:70}} src={logo} alt="" />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='author' smooth={true} offset={-150} duration={500}>Authors</Link></li>
        <li>Books</li>
        <li><button className='btn'>Sign In</button></li>
      </ul>

      {/* menu button can be added to show the menu in smaller screens */}
    </nav>
  )
}

export default Navbar