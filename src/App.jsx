import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import Authors from './Components/Authors/Authors'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle='OUR PROGRAMS' title='What we offer'/> 
      {/* these titles are used as props */}
      <Program/>
      <Title subtitle='AUTHORS' title='Read from the best'/>
      <Authors/>
      </div>
    </div>
  )
}

export default App