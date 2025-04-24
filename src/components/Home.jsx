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
    <div>
      <button className='w-full bg-black text-white py-3 rounded mt-4' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home