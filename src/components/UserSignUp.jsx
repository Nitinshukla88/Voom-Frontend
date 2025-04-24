import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const submitEventHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullname:{
        firstname: firstname,
        lastname: lastname
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    const data = response?.data;
    if(response.status === 200){
      setUser(data.newUser);
      localStorage.setItem("voom-user", JSON.stringify(data.newUser));
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <p className='mb-10 text-5xl font-bold'>Voom</p>
      <form onSubmit={(e)=> submitEventHandler(e)}>
      <h3 className='text-lg mb-2 font-medium'>What's your name</h3>
      <div className='flex gap-4 mb-5'>
        <input type='text' required placeholder='firstname' className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base' value={firstname} onChange={(e)=> setFirstname(e.target.value)}></input>
        <input type='text' required placeholder='lastname' className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base' value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
      </div>
        <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
        <input type='email' required placeholder='email@example.com' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-5' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
        <input type='password' required placeholder='password' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-5' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-4'>Sign up</button>
        
      </form>
      <p className='text-center'>Already a user? <Link to={"/user/login"} className='text-blue-600'>Login</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignUp