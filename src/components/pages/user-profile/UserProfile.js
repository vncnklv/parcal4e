import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthProvider";
import { getUserById } from "../../../services/auth";

export const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        getUserById(user._id)
            .then(res => setUserData(res));
    }, [user._id]);

    console.log(userData);

    return (
        <h1>User Profile - {userData?.username} {userData?.email}</h1>
    );
}