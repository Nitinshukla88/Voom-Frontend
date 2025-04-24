import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
    const { setUser } = useContext(UserDataContext);

    const handleLogout = async() => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {}, {withCredentials : true});
        if(response.status === 200){
            setUser(null);
            localStorage.removeItem("voom-user");
            console.log("voom-user removed by logout route");
            navigate("/user/login");
        }
    }
  return (
    <div className='h-screen relative'>
      <p className='ml-8 text-5xl font-bold absolute'>Voom</p>
      <div className='w-screen h-screen'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUia_MZ68vuezI9kMgNBLfKqWbKlQU9U2Zbg&s' className='h-full w-full object-cover'/>
      </div>
      <div className='bg-white absolute bottom-0 w-full p-5'>
        <div className='h-[30%]'><h4 className='text-3xl font-semibold'>Find a trip</h4>
        <form>
          <input type='text' placeholder='Enter a pick-up location' className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5'></input>
          <input type='text' placeholder='Enter your destination' className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3'></input>
        </form></div>
        <div className='h-[70%]'>

        </div>
      </div>
    </div>
  )
}

export default Home