import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { useNavigate } from 'react-router-dom';

import { login, logout, register, verifyToken } from '../services/auth';

const Context = createContext({});

export const useAuth = () => {
    return useContext(Context);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [value, setLocalStorageValue, removeLocalStorageValue] = useLocalStorage('user', {});
    const navigate = useNavigate();

    useEffect(() => {
        if (value.token) {
            verifyToken()
                .then(() => setUser(value))
                .catch(() => {
                    setUser({});
                    setIsAuth(false);
                    removeLocalStorageValue();
                });
        }
    }, [value, removeLocalStorageValue])

    const userLogin = async (username, password) => {
        const user = await login(username, password);
        setUser({ token: user.token, _id: user._id });
        setLocalStorageValue({ token: user.token, _id: user._id });
        setIsAuth(true);
        navigate('/');
    }

    const userRegister = async (data) => {
        const user = await register(data);
        setUser({ token: user.token, _id: user._id });
        setLocalStorageValue({ token: user.token, _id: user._id });
        setIsAuth(true);
        navigate('/');
    }

    const userLogout = async () => {
        await logout()
        setUser({});
        setIsAuth(false);
        removeLocalStorageValue();
    }

    return (
        <Context.Provider value={{ user, userLogin, userRegister, userLogout, isAuth }}>
            {children}
        </Context.Provider>
    )
};