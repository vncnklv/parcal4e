import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { useNavigate } from 'react-router-dom';

import { login } from '../services/auth';

const Context = createContext({});

export const useAuth = () => {
    return useContext(Context);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [value, setLocalStorageValue] = useLocalStorage('user', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (value.token) {
            setUser(value);
        }
    }, [value])

    const userLogin = (username, password) => {
        login(username, password)
            .then(res => {
                setUser({ token: res.token, username, _id: res._id })
                setLocalStorageValue({ token: res.token, username, _id: res._id });
                navigate('/');
            });
    }

    const userLogout = () => {
        setUser({})
        setLocalStorageValue({});
    }

    return (
        <Context.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </Context.Provider>
    )
};