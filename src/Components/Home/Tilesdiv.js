import React from 'react'
import Tile from './Tile';
import './Home.css'

function Tilesdiv() {
  return (
    <div className='Tilesdiv flex'>
       <div className='spec-Tile'> <Tile /></div>
       <div className='spec-Tile'> <Tile /></div>
       <div className='spec-Tile'> <Tile /></div>
    </div>
  )
}

export default Tilesdiv