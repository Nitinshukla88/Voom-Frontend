import React, { createContext, useEffect, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(()=> {
        return localStorage.getItem("voom-captain") ? JSON.parse(localStorage.getItem("voom-captain")) : null
    });

    useEffect(() => {
        if(captain){
            localStorage.setItem("voom-captain", JSON.stringify(captain));
            console.log("Captain data saved to local storage")
        }else{
            localStorage.removeItem("voom-captain")
        }
    }, [captain])

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    );
};