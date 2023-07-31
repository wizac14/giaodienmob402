import React, { useState, createContext } from 'react'
import { login } from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const UserContext = createContext()
export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [id_user, setid_user] = useState("")
    const onLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            console.log('login result', result);
            if (result.status === true) {
                setUser(result.data.username);
                setid_user(result.data._id);
                //   await AsyncStorage.setItem('token', result.data.token);
                return true;
            }
        } catch (error) {
            console.log('login error', error);
        }
        return false;
    }
    return (
        <UserContext.Provider value={{ user, setUser, onLogin, id_user }}>
            {children}
        </UserContext.Provider>
    )
}