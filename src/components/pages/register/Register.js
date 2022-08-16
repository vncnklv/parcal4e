import { useState } from "react";
import { useAuth } from "../../../contexts/AuthProvider";
import { InputField } from "../../common/input-field/InputField";

const initialState = {
    username: '',
    password: '',
    repeatPassword: '',
    email: '',
    avatarUrl: '',
}

export const Register = () => {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const { userRegister } = useAuth();

    const changeHandler = (e) => {
        setData(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        userRegister(data)
            .catch(err => setErrors(err.errors));
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <InputField
                        name="username"
                        changeHandler={changeHandler}
                        label="Username"
                    />
                    {errors.username && <div>{errors.username}</div>}
                </div>
                <div>
                    <InputField
                        name="email"
                        changeHandler={changeHandler}
                        label="Email"
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <InputField
                        name="password"
                        changeHandler={changeHandler}
                        label="Password"
                        type="password"
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <InputField
                        name="repeatPassword"
                        changeHandler={changeHandler}
                        label="Repeat Password"
                        type="password"
                    />
                    {errors.repeatPassword && <div>{errors.repeatPassword}</div>}
                </div>
                <div>
                    <InputField
                        name="avatarUrl"
                        changeHandler={changeHandler}
                        label="Avatar URL"
                    />
                    {errors.avatarUrl && <div>{errors.avatarUrl}</div>}
                </div>

                <button>Register</button>
            </form>
        </>
    );
}