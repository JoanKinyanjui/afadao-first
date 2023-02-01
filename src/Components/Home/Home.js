import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarComponent from '../Navbar/Navbar'
// eslint-disable-next-line
import Navbar from '../Navbar/Navbar'
import Tilesdiv from './Tilesdiv'

function Home() {
  const [business,setBusiness] = useState([])
  useEffect(()=>{
async function getBusinesses(){
  try {
		const response = await axios.get("http://localhost:3001/");
    setBusiness(response.data.businesses)
    console.log(response.data.businesses)                                
	}
	catch (error) {
		console.log(error);
	}
}
getBusinesses()
  },[])
  return (
    <div className='Home-div'>
      <NavbarComponent />
        <Tilesdiv business={business} />
    </div>
  )
}

export default Home