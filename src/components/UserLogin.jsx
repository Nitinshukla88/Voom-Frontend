import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext);

  const submitEventHandler = async(e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, loginData, {withCredentials : true});
    if(response.status === 200){
      console.log("Login Successful");
      setUser(response?.data?.user)

      navigate("/home")
    }
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
      <p className='text-center'>New here? <Link to={"/user/signup"} className='text-blue-600'>Create New Account</Link></p>
      </div>
      <div>
        <Link to={"/captain/login"}><button className='bg-[#10b461] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7'>Sign in as Captain</button></Link>
      </div>
    </div>
  )
}

export default UserLogin