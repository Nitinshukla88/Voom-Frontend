import React, { useContext, useEffect } from 'react'
import { CaptainDataContext } from './CaptainContext'
import { useNavigate } from 'react-router-dom';

const CaptainProtectedWrapper = ({children}) => {

    const { captain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!captain) {
            navigate("/captain/login");
        }
    }, [captain, navigate]);
  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper