import React from 'react';
import { useState } from 'react';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Enroll.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Enroll() {
    const navigate = useNavigate()
    const [error,setError] = useState('');
    const [company_name,setCompany_name] = useState('');
    const [tag_line,setTag_line] = useState('');
    const [target,setTarget] = useState('');
    const [valuation,setValuation] = useState('');
    const [days_left,setDays_left] = useState('');
    const [investors,setInvestors] = useState('');
    const [background_image,setBackground_image] = useState('');
    const [profile_image,setProfile_image] = useState('');
    const [raised_amount,setRaised_amount] = useState('');
    const [min_invest,setMin_invest] = useState('');


const onHandleSubmit =async(e)=>{
    e.preventDefault('');
    setCompany_name('');
    setTag_line('')
    setTarget('')
    setValuation('')
    setDays_left('')
    setInvestors('')
    setBackground_image('')
    setProfile_image('')
    setRaised_amount('')
    setMin_invest('')
 

   //Register Business...
const response = await fetch('http://localhost:3001/enroll',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
        company_name,tag_line,target,valuation,days_left,investors,background_image,profile_image,raised_amount,min_invest
    }),
   });
if(response.status == 201){
    const {business} = await response.json();
    await setError(`Congratulations ${business.company_name} , you have successfully signed in`)
    navigate('/')
}else if(response.status == 400){
   const {errors} = await response.json();
   
        setError(errors)
      
}

    }
   


const onCompanyName =(e)=>{
        setCompany_name(e.target.value);
    }
const onChangeTarget =(e)=>{
        setTarget(e.target.value);
    }
const onChangeTagLine =(e)=>{
        setTag_line(e.target.value);
    }  
const onChangeValuation =(e)=>{
   setValuation(e.target.value);
}  
const onCompanyNmae =(e)=>{
    setCompany_name(e.target.value);
}
const onChangeSetDaysLeft =(e)=>{
    setDays_left(e.target.value);
}
const onChangeInvestors =(e)=>{
    setInvestors(e.target.value);
}    
const onChangeBackgroundImage =(e)=>{
    setBackground_image(e.target.value);
}
const onChangeProfileImage =(e)=>{
    setProfile_image(e.target.value);
}
const onChangeRaisedAmount =(e)=>{
    setRaised_amount(e.target.value);
}
const onChangeMinInvest =(e)=>{
    setMin_invest(e.target.value);
}

  return (
    <div>
            <div className='form-container  flex items-center relative'>
    <div className='form-div '>
    <div><LocationCityIcon style={{fontSize: "xxx-large", color:"#5EBCB6"}}/></div>
<p className='text-3xl '>Enroll Your Business For Funding</p>
<form onSubmit={onHandleSubmit} className='form'>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Business Name:</label>
    <input className='input' type='text'  required name="company_name" value={company_name} onChange={onCompanyName} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Target Amount :</label>
    <input className='input' type='number' required name="target"  value={target}  onChange={onChangeTarget} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Motto :</label>
    <input className='input' type="text" name='tag_line' required  value={tag_line} onChange={onChangeTagLine} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Valuation :</label>
    <input className='input' type="number" name='valuation' required  value={valuation} onChange={onChangeValuation} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Days Left :</label>
    <input className='input' type="number" name='days_left' required  value={days_left} onChange={onChangeSetDaysLeft} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Number Of Investors :</label>
    <input className='input' type="number" name='investors' required  value={investors} onChange={onChangeInvestors} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Background Image :</label>
    <input className='input' type="text" name='background_image' required  value={background_image} onChange={onChangeBackgroundImage} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Profile Image :</label>
    <input className='input' type="text" name='profile_image' required  value={profile_image} onChange={onChangeProfileImage} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Raised Amount :</label>
    <input className='input' type="number" name='raised_amount' required  value={raised_amount} onChange={onChangeRaisedAmount} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Minimum Investment Amount :</label>
    <input className='input' type="number" name='min_invest' required  value={min_invest} onChange={onChangeMinInvest} />
    </div>

    {/* <div className='flex place-content-center mt-2 text-slate-400'><p>Already have an account  ? <Link to='/login' className='text-blue-300 '>Login</Link></p></div> */}

    <input type='submit' value='Submit' className='submit-button' />
</form>

    </div>
    <div className='absolute bottom-0 w-screen mb-2'>
       <h3>{error}</h3>
    </div>

    </div>
    </div>
  )
}

export default Enroll