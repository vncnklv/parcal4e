import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider"
import { Login } from "./pages/login/Login";

export const RouteGuard = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Login />;
}