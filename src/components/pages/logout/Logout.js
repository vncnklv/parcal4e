import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

export const Logout = () => {
    const { userLogout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        userLogout();
        navigate('/');
    }, []);

    return null;
}