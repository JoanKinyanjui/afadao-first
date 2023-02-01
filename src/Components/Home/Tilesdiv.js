import React, {useState} from 'react'
import Tile from './Tile';
import { providers, Contract } from "ethers";

import './Home.css';
import data from '../../data'

function Tilesdiv() {
  console.log(data)
  return (
    <div className='Tilesdiv flex py-12'>
      {business.map((data,index)=>(
 <div className='spec-Tile' key={data.key}> <Tile data={data}/></div>
      ))}
    </div>
  )
}

export default Tilesdiv;