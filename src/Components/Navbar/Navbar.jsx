import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

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
        <li>Home</li>
        <li>Programs</li>
        <li>Books</li>
        <li>Authors</li>
        <li><button className='btn'>Sign In</button></li>
      </ul>
    </nav>
  )
}

export default Navbar