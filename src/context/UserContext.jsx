import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {

  const [user, setUser] = useState(() =>{
    const storedUser = localStorage.getItem("voom-user");
    return storedUser ? JSON.parse(storedUser) : null
  });

  useEffect(()=> {
    if(user){
      localStorage.setItem("voom-user", JSON.stringify(user));
    }
  },[user])

  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
