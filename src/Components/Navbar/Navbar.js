import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaSquarespace} from 'react-icons/fa'
// eslint-disable-next-line
import { Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from "react";
import { providers, Contract } from "ethers";

import Web3Modal from "web3modal";



export function NavbarComponent() {
   // walletConnected keep track of whether the user's wallet is connected or not
   const [walletConnected, setWalletConnected] = useState(false);

  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

   const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Mumbai network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 1666700000) {
      window.alert("Change the network to Harmony");
      throw new Error("Change network to Harmony");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

    /*
    connectWallet: Connects the MetaMask wallet
  */
    const connectWallet = async () => {
      try {
        // Get the provider from web3Modal, which in our case is MetaMask
        // When used for the first time, it prompts the user to connect their wallet
        await getProviderOrSigner();
        setWalletConnected(true);
  
      } catch (err) {
        console.error(err);
      }
    };

    const renderButton = () => {
      if (walletConnected){
        return(
          <Nav.Link href="#home">Invest</Nav.Link>
        )
      } else {
        return(
          <Nav.Link> <button style={{backgroundColor:"#5EBCB6"}} className='  px-2 md:px-4 py-1 rounded' onClick={connectWallet}>Connect Wallet</button></Nav.Link>

        )
      }
    }

    useEffect(() => {
      // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
      if (!walletConnected) {
        // Assign the Web3Modal class to the reference object by setting it's `current` value
        // The `current` value is persisted throughout as long as this page is open
        web3ModalRef.current = new Web3Modal({
          network: "goerli",
          providerOptions: {},
          disableInjectedProvider: false,
        });
        connectWallet();
      }
    }, [walletConnected]);


  return (


    <>
     <Navbar bg="light" variant="light" fixed='top' className='py-2 navbar'>
        <Container>
          <Navbar.Brand href="#home" className='flex more_colors'><p className='text-2xl  md:text-4xl mx-2'><FaSquarespace /></p> <p className=' text-xl md:text-3xl font-black'>CrowdFunding</p></Navbar.Brand>
          <Nav className="justify-content-end text-black text-lg flex items-center" >
            {/* <Nav.Link href="#home">Invest</Nav.Link>
            <Nav.Link href="#pricing"> <button style={{backgroundColor:"#5EBCB6"}} className='  px-2 md:px-4 py-1 rounded'>Sign Up</button></Nav.Link> */}
            {renderButton()}

          </Nav>
        </Container>
      </Navbar>
      <hr />
    </>
  )
}

export default NavbarComponent