import React, { useContext, useState } from 'react'

const UserContext = () => {

    const UserContext = useContext();

    const [user, setUser] = useState({});
    
  return (
    <UserContext.Provider value={{user}}>
        {children}  
    </UserContext.Provider>
  )
}

export default UserContext