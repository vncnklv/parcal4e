import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { useNavigate } from 'react-router-dom';

import { login, logout, verifyToken } from '../services/auth';

const Context = createContext({});

export const useAuth = () => {
    return useContext(Context);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [value, setLocalStorageValue, removeLocalStorageValue] = useLocalStorage('user', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (value.token) {
            verifyToken()
                .then(() => setUser(value))
                .catch(() => {
                    setUser(null);
                    removeLocalStorageValue();
                });
        }
    }, [value, removeLocalStorageValue])

    const userLogin = async (username, password) => {
        const user = await login(username, password);
        setUser({ token: user.token, username, _id: user._id });
        setLocalStorageValue({ token: user.token, username, _id: user._id });
        navigate('/');
    }

    const userLogout = async () => {
        await logout()
        setUser(null);
        removeLocalStorageValue();
    }

    return (
        <Context.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </Context.Provider>
    )
};