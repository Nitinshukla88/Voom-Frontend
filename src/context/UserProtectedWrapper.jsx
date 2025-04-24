import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from './UserContext';

const UserProtectedWrapper = ({ children }) => {

  const { user } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(()=>{
      if(!user){
        navigate("/user/login");
      }
    }, [user, navigate]);
  return (
        <>
        {children}
        </>
  )
}

export default UserProtectedWrapper