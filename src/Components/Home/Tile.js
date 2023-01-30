import React from 'react';
import './Home.css';
import { CiClock2 } from "react-icons/ci";
// eslint-disable-next-line
import { FaUserPlus, IconName } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Tile({data}) {
  return (
    <div className='Tile-container'>

      {/* Div part one  */}
        <div className='Tile-div-1'>
          <div className='bckg-image'> 
          <img className='image_one' src={data.background_image} alt='gr' />
          <div className='closing text-sm flex place-content-center'> <CiClock2  className='flex self-center text-md'/><p className='ml-2'> Closing</p></div>
          <div className='profile-div'><img className='profile-image' src={data.profile_Image} alt='gr' /></div>
          </div>
        </div>
               {/* Div part 2    */}
       <div className=' Tile-div-2'>
     <div className='follow-button flex text-sm'><p className='self-center'>+ Follow</p></div>

     <div className='w-full first'>
      <h3 className='font-black text-3xl'>{data.company_name}</h3>
      <p className='text-md pt-2 first-p'>Invest in a diversified portfolio with target yield of 8-9%</p>
     </div>

<div className='w-full second'>
     <div className='second-first flex'>
<div className='px-4 py-1'>
<p className='font-bold  text-lg md:text-2xl okay-bold'>{data.min_Invest}</p>
<p>Min Invest</p>
</div>
<div style={{borderLeft:'1px solid #000',height:'40px'}} className='grid self-center mr-1'></div>

<div className='px-4 py-1'>
<p className='font-bold text-lg md:text-2xl okay-bold'>{data.target}</p>
<p>Target</p>
</div>
<div style={{borderLeft:'1px solid #000',height:'40px'}} className='grid self-center mr-1'></div>

<div className='px-4'>
<p className='font-bold text-lg md:text-2xl okay-bold py-1'>{data.valuation}</p>
<p>Valuation</p>
</div>
     </div>

 <div className='second-second'>
  <ProgressBar now={60} />
  <div className='progress-bar-div flex justify-between text-sm text-slate-600'>
    <div>{data.raised_amount} Raised</div>
    <div>{data.days_left}days left</div>
  </div>
</div>
    </div>   
    <div className='w-full third'>
      <div className='third-first flex mb-2'>
      <div className='third-buttons-first px-1'>Real Estate</div>
      <div className='third-buttons-first ml-2 px-1'>PreferredIncome</div>
      </div>
      <div className='third-second flex '>
        <div className='third-buttons-second px-1'>Income generating</div>
      </div>
     </div>

     <div className='investors flex text-slate-600'><FaUserPlus className='flex self-center' /><p className='ml-2'>{data.investors} Investors</p></div>
     </div>

   


        </div>
    
  )
}

export default Tile