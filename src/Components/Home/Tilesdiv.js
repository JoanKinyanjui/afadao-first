import React, {useState} from 'react'
import Tile from './Tile';
import { providers, Contract } from "ethers";

import './Home.css';
// import data from '../../data'
import { AFADAO_CONTRACT_ADDRESS, abi } from "../constants/index";


function Tilesdiv() {

  const ethers = require("ethers");

  const [data, setListedStartups] = useState([]);
  // const getProviderOrSigner = NavbarComponent.getProviderOrSigner;

  const getlistedStartups = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      // const provider = await NavbarComponent.getProviderOrSigner;
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract

      //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
      const afadaoContract = new Contract(
        AFADAO_CONTRACT_ADDRESS,
        abi,
        signer
      );
      // call the getListedStartups from the contract
      const _listedStartups = await afadaoContract.getListedStartups();

        //Fetch all the details of every startup from the contract and display
        const items = await Promise.all(_listedStartups.map(async i => {
          // const tokenURI = await contract.tokenURI(i.tokenId);
          // let meta = await axios.get(tokenURI);
          // meta = meta.data;
  
          let amountInvested = ethers.utils.formatUnits(i.amountInvested.toString(), 'ether');
          let valuation = ethers.utils.formatUnits(i.valuation.toString(), 'ether');
          let Participants = ethers.utils.formatUnits(i.participants.toString(), 'ether');
          let item = {
              // price,
              name: i.name,
              desc: i.desc,
              Participants,
              startDate: i.startDate,
              endDate: i.endDate,
              amountInvested,
              valuation,
          }
          // console.log(item);

          return item;
      }))
        setListedStartups(items);
        console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  getlistedStartups()
  // console.log(data)
  return (
    <div className='Tilesdiv flex'>
      {data.map((data,index)=>(
 <div className='spec-Tile' key={data.key}> <Tile data={data}/></div>
      ))}
    </div>
  )
}

export default Tilesdiv;