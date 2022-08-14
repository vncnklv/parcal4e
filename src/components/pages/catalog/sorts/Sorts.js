import { useState } from "react";

import { InputField } from "../../../common/input-field/InputField";

export const Sorts = ({ sorts, submitHandler, changeHandler }) => {

    const checked = (name, value) => {
        return sorts[name] && sorts[name] == value;
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

            <div><InputField type="checkbox" label="Ascending" name="likes" value='asc' changeHandler={changeHandler} checked={checked('likes','asc')} /></div>
            <div><InputField type="checkbox" label="Descending" name="likes" value='desc' changeHandler={changeHandler} checked={checked('likes','desc')} /></div>

            <br />
            <div>
                <button>Sort</button>
            </div>
        </form>
    );
}