import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});
  
    const submitEventHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      });
      setEmail('');
      setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <p className='mb-10 text-5xl font-bold'>Voom</p>
      <form onSubmit={(e)=> submitEventHandler(e)}>
        <h3 className='text-xl mb-2 font-medium'>What's your email</h3>
        <input type='email' required placeholder='email@example.com' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <h3 className='text-xl mb-2 font-medium'>Enter password</h3>
        <input type='password' required placeholder='password' className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-4'>Login</button>
        
      </form>
      <p className='text-center'>Wanna join fleet? <Link to={"/captain/signup"} className='text-blue-600'>Register as Captain</Link></p>
      </div>
      <div>
        <Link to={"/user/login"}><button className='bg-[#d5622d] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7'>Sign in as User</button></Link>
      </div>
    </div>
  )
}

export default CaptainLogin