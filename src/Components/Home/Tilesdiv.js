import React from 'react'
import Tile from './Tile';
import './Home.css';
import data from '../../data'

function Tilesdiv() {
  console.log(data)
  return (
    <div className='Tilesdiv flex'>
      {data.map((data,index)=>(
 <div className='spec-Tile' key={data.key}> <Tile data={data}/></div>
      ))}
    </div>
  )
}

export default Tilesdiv;