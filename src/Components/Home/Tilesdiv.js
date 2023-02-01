import React from 'react'
import Tile from './Tile';
import './Home.css';
import data from '../../data'
// import business from '../../../backend/model/business';

function Tilesdiv({business}) {
  console.log(business)
  return (
    <div className='Tilesdiv flex py-12'>
      {business.map((data,index)=>(
 <div className='spec-Tile' key={data.key}> <Tile data={data}/></div>
      ))}
    </div>
  )
}

export default Tilesdiv;