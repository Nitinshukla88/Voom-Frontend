import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async() => {
        try{

        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {}, {withCredentials: true});
        if(response.status === 200){
            localStorage.removeItem('token');
            navigate("/user/login");
        }}catch(error){
            console.error("Error logging out", error);
        }
    }

    useEffect(()=>{
        handleLogout();
    }, []);

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout