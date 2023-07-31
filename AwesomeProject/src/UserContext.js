import React, { useState, createContext } from 'react'
export const UserContext = createContext()
export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [id_user, setid_user] = useState(12345);
    return (
        <UserContext.Provider value={{ user, setUser,id_user,setUser }}>
            {children}
        </UserContext.Provider>
    )
}