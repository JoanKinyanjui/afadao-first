import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaSquarespace} from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavbarComponent() {
  return (
    <>
     <Navbar bg="light" variant="light" fixed='top' className='py-2 navbar mb-24'>
        <Container>
          <Navbar.Brand href="#home" className='flex more_colors'><p className='text-2xl  md:text-4xl mx-2'><FaSquarespace /></p> <p className=' text-xl md:text-3xl font-black'>CrowdFunding</p></Navbar.Brand>
          <Nav className="justify-content-end text-black text-lg flex items-center" >
            <Nav.Link href="#home">Invest</Nav.Link>
            <Link to="/enroll"> <button style={{backgroundColor:"#5EBCB6"}} className=' px-2 md:px-4 py-1 rounded'><p className='text-base text-slate-600'>Enroll</p></button></Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </>
  )
}

export default NavbarComponent