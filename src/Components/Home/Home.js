import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Navbar from '../Navbar/Navbar'
import Tilesdiv from './Tilesdiv'

function Home() {
  return (
    <div className='Home-div'>
      <NavbarComponent />
        <Tilesdiv />
    </div>
  )
}

export default Home