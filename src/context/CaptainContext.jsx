import React, { createContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);

    const updateCaptain = (newCaptain) => {
        setCaptain(newCaptain);
    };

    return (
        <CaptainDataContext.Provider value={{ captain, updateCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    );
};