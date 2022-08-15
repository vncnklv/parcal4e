import { useState } from "react";
import { InputField } from "../../../common/input-field/InputField";

export const Sorts = ({ sort }) => {
    const [sorts, setSorts] = useState({});

    const changeHandler = (e) => {
        setSorts((old) => {
            const sorts = { ...old }
            if (!e.target.checked) {
                delete sorts[e.target.name];
            } else {
                sorts[e.target.name] = e.target.value;
            }
            return sorts;
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        sort(sorts);
    }

    const checked = (name, value) => {
        return sorts[name] && sorts[name] === value;
    };

    return (
        <form onSubmit={submitHandler}>
            <div>Sort</div>
            <hr />

            <div>Price</div>
            <div><InputField type="checkbox" label="Ascending" name="price" value='asc' changeHandler={changeHandler} checked={checked('price', 'asc')} /></div>
            <div><InputField type="checkbox" label="Descending" name="price" value='desc' changeHandler={changeHandler} checked={checked('price', 'desc')} /></div>
            <br />
            <div>Likes</div>

            <div><InputField type="checkbox" label="Ascending" name="likes" value='asc' changeHandler={changeHandler} checked={checked('likes', 'asc')} /></div>
            <div><InputField type="checkbox" label="Descending" name="likes" value='desc' changeHandler={changeHandler} checked={checked('likes', 'desc')} /></div>

            <br />
            <div>
                <button>Sort</button>
            </div>
        </form>
    );
}