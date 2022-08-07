import { useState } from "react";
import { useAuth } from "../../../contexts/AuthProvider";

export const Login = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState({});

    const { userLogin } = useAuth();

    const changeHandler = (e) => {
        setUserData(oldData => {
            const newData = { ...oldData }
            newData[e.target.name] = e.target.value
            return newData;
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        userLogin(userData.username, userData.password)
            .catch(err => setError(err));
    }

    return (
        <main>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">
                    Username
                    <input type='text' id="username" name="username" value={userData.username} onChange={changeHandler} />
                </label>

                <label htmlFor="password">
                    Password
                    <input type='password' id="password" name="password" value={userData.password} onChange={changeHandler} />
                </label>

                <input type="submit" value="Login" />
                {error && <span>{error.message}</span>}
            </form>
        </main>
    );
}