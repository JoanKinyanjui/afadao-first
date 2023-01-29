import React from 'react';
import './Home.css';
import { CiClock2 } from "react-icons/ci";
import { FaUserPlus, IconName } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';


function Tile() {
  return (
    <div className='Tile-container'>

      {/* Div part one  */}
        <div className='Tile-div-1'>
          <div className='bckg-image'> 
          <img className='image_one' src='https://s3-us-west-2.amazonaws.com/frontfundr-upload/34907_campaigncardimage_400x200_frontfundr-profileimage__18-feb-22_4_20220302151005417.png' />
          <div className='closing text-sm flex place-content-center'> <CiClock2  className='flex self-center text-md'/><p className='ml-2'> Closing</p></div>
          <div className='profile-div'><img className='profile-image' src='https://s3-us-west-2.amazonaws.com/frontfundr-upload/25046_SquareLogoImage_ff-cmimic_square_logo-dark_20210427201845998.jpg' /></div>
          </div>
        </div>
               {/* Div part 2    */}
       <div className=' Tile-div-2'>
     <div className='follow-button flex text-sm'><p className='self-center'>+ Follow</p></div>

     <div className='w-full first'>
      <h3 className='font-black text-3xl'>CMI MIC Balanced Fund</h3>
      <p className='text-md pt-2 first-p'>Invest in a diversified portfolio with target yield of 8-9%</p>
     </div>

<div className='w-full second'>
     <div className='second-first flex'>
<div className='px-4 py-1'>
<p className='font-bold  text-lg md:text-2xl okay-bold'>$250</p>
<p>Min Invest</p>
</div>
<div style={{borderLeft:'1px solid #000',height:'40px'}} className='grid self-center mr-1'></div>

<div className='px-4 py-1'>
<p className='font-bold text-lg md:text-2xl okay-bold'>$500K</p>
<p>Target</p>
</div>
<div style={{borderLeft:'1px solid #000',height:'40px'}} className='grid self-center mr-1'></div>

<div className='px-4'>
<p className='font-bold text-lg md:text-2xl okay-bold py-1'>$9M</p>
<p>Valuation</p>
</div>
     </div>

 <div className='second-second'>
  <ProgressBar now={60} />
  <div className='progress-bar-div flex justify-between text-sm text-slate-600'>
    <div>$1,233,400 Raised</div>
    <div>17days left</div>
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

     <div className='investors flex text-slate-600'><FaUserPlus className='flex self-center' /><p className='ml-2'>82 Investors</p></div>
     </div>

   


        </div>
    
  )
}

export default Tile