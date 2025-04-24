import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [plateNum, setPlateNum] = useState("");
    const [color, setColor] = useState("");
    const [capacity, setCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const navigate = useNavigate();

    const { setCaptain } = useContext(CaptainDataContext);
  
    const submitEventHandler = async(e) => {
      e.preventDefault();
      const captainData = {
        email: email,
        password: password,
        fullname : {
          firstname: firstname,
          lastname: lastname
        },
        vehicle: {
          plate: plateNum,
          color: color,
          capacity: capacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData, {withCredentials : true});
      if(response.status === 200){
        setCaptain(response?.data?.captain);
        localStorage.setItem("voom-captain", JSON.stringify(response?.data?.captain));
        console.log("Captain data saved to local storage")
        navigate("/captain/home")
      }

      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
      setPlateNum('');
      setColor('');
      setCapacity('');
      setVehicleType('');
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <p className='mb-5 text-5xl font-bold'>Voom</p>
      <form onSubmit={(e)=> submitEventHandler(e)}>
      <h3 className='text-lg mb-2 font-medium'>What's our Captain's name</h3>
      <div className='flex gap-4 mb-2'>
        <input type='text' required placeholder='firstname' className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base' value={firstname} onChange={(e)=> setFirstname(e.target.value)}></input>
        <input type='text' placeholder='lastname' className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base' value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
      </div>
        <h3 className='text-lg mb-2 font-medium'>What's our Captain's email</h3>
        <input type='email' required placeholder='email@example.com' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-2' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
        <input type='password' required placeholder='password' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-2' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      
      <div className='mb-4'>
        <div className='flex gap-4 mb-2'>
          <div>
          <h3 className='text-lg mb-2 font-medium'>Vehicle Type</h3>
          <input type='text' required placeholder='vehicleType' className='bg-[#eeeeee] rounded w-full px-4 py-2 border text-lg  placeholder:text-base' value={vehicleType} onChange={(e)=> setVehicleType(e.target.value)}></input>
          </div>
          <div>
          <h3 className='text-lg mb-2 font-medium'>Plate No</h3>
          <input type='text' required placeholder='plate no.' className='bg-[#eeeeee] rounded w-full px-4 py-2 border text-lg  placeholder:text-base' value={plateNum} onChange={(e)=> setPlateNum(e.target.value)}></input>
          </div>
        </div>
        <div className='flex gap-4 mb-2'>
          <div>
        <h3 className='text-lg mb-2 font-medium'>Color</h3>
        <input type='text' required placeholder='color' className='bg-[#eeeeee] rounded w-full px-4 py-2 border text-lg placeholder:text-base' value={color} onChange={(e)=> setColor(e.target.value)}></input>
        </div>
        <div>
        <h3 className='text-lg mb-2 font-medium'>Capacity</h3>
        <input type='number' required placeholder='capacity' className='bg-[#eeeeee] rounded w-full px-4 py-2 border text-lg placeholder:text-base' value={capacity} onChange={(e)=> setCapacity(e.target.value)}></input>
        </div>
        </div>
      </div>
      <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-2' onClick={submitEventHandler}>Create Account</button>
      </form>
      <p className='text-center mb-1'>Already a user? <Link to={"/captain/login"} className='text-blue-600'>Login</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and <span className='underline'>google privacy policy and terms of services apply</span></p>
      </div>
    </div>
  )
}

export default CaptainSignUp