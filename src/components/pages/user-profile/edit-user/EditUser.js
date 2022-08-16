import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../../services/auth";

export const EditUser = ({ attribute }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setValue('');
        setError(null);
    }, [attribute]);

    const changeHandler = (e) => {
        setValue(e.target.value);
    };

    const clickHandler = () => {
        updateUser({ [attribute]: value })
            .then(() => {
                navigate('/user-profile');
            })
            .catch(err => {
                setError(err.errors);
            });
    };

    return (
        <div>
            <h3>Change {attribute}</h3>
            <input type={attribute === "password" ? "password" : "text"} value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>Change</button>
            {error && <span>{error[attribute]}</span>}
        </div>
    );
}