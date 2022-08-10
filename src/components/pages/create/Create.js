import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../../services/article";
import { InputField } from "./input-field/InputField";

export const Create = () => {
    const [article, setArticle] = useState({
        name: "",
        images: [],
        age_group: "",
        gender: "",
        description: "",
        sizes: [],
        price: 0,
        color: "",
        brand: "",
    });
    const [imageLink, setImageLink] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setArticle(oldData => {
            const newData = { ...oldData };
            newData[e.target.name] = e.target.value;
            return newData;
        });
    }

    const checkboxChangeHandler = (e) => {
        const size = e.target.name.toLowerCase();
        const index = article.sizes.indexOf(size);

        if (index === -1) {
            setArticle(oldData => {
                const newData = { ...oldData };
                newData.sizes.push(size);
                return newData;
            });
        } else {
            setArticle(oldData => {
                const newData = { ...oldData };
                newData.sizes.splice(index, 1);
                return newData;
            });
        }
    }

    const checked = (size) => {
        return article.sizes && article.sizes.includes(size.toLowerCase());
    }

    const imageLinkChangeHandler = (e) => {
        setImageLink(e.target.value);
    }


    const addLinkToArticle = (e) => {
        if (imageLink.length > 0) {
            setArticle(oldData => {
                const newData = { ...oldData };
                newData.images.push(imageLink);
                return newData;
            });
            setImageLink('');
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        create(article)
            .then((res) => navigate(`/details/${res._id}`))
            .catch(err => setErrors(err.errors));
    }

    return (
        <main>
            <h1>Add Article</h1>

            <form onSubmit={submitHandler}>
                <div>
                    {article.images.map((link, index) => <div key={link + index}>{link}</div>)}
                    <InputField label="Image Link" name="link" value={imageLink} changeHandler={imageLinkChangeHandler} />
                    <button type="button" onClick={addLinkToArticle}>Add</button>
                </div>

                <div>
                    <InputField label="Name" name="name" value={article.name} changeHandler={changeHandler} />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div>
                    <InputField label="Brand" name="brand" value={article.brand} changeHandler={changeHandler} />
                    {errors.brand && <div>{errors.brand}</div>}
                </div>

                <div>
                    <InputField label="Age group" name="age_group" value={article.age_group} changeHandler={changeHandler} />
                    {errors.age_group && <div>{errors.age_group}</div>}
                </div>

                <div>
                    <InputField label="Gender" name="gender" value={article.gender} changeHandler={changeHandler} />
                    {errors.gender && <div>{errors.gender}</div>}
                </div>

                <div>
                    <label htmlFor="description">
                        Description
                        <textarea type="text" id="description" value={article.description} onChange={changeHandler} name="description" />
                    </label>
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div>
                    <InputField label="Color" name="color" value={article.color} changeHandler={changeHandler} />
                    {errors.color && <div>{errors.color}</div>}
                </div>
                <div>
                    <InputField label="Price" name="price" value={article.price} changeHandler={changeHandler} />
                    {errors.price && <div>{errors.price}</div>}
                </div>

                <div>
                    <div><span>Sizes</span></div>

                    <InputField label="XXS" type="checkbox" name="XXS" checked={checked('XXS')} changeHandler={checkboxChangeHandler} />
                    <InputField label="XS" type="checkbox" name="XS" checked={checked('XS')} changeHandler={checkboxChangeHandler} />
                    <InputField label="S" type="checkbox" name="S" checked={checked('S')} changeHandler={checkboxChangeHandler} />
                    <InputField label="M" type="checkbox" name="M" checked={checked('M')} changeHandler={checkboxChangeHandler} />
                    <InputField label="L" type="checkbox" name="L" checked={checked('L')} changeHandler={checkboxChangeHandler} />
                    <InputField label="XL" type="checkbox" name="XL" checked={checked('XL')} changeHandler={checkboxChangeHandler} />
                    <InputField label="XXL" type="checkbox" name="XXL" checked={checked('XXL')} changeHandler={checkboxChangeHandler} />

                    {errors.sizes && <div>{errors.sizes}</div>}
                </div>

                <input type="submit" value="Add" />
            </form>
        </main>
    );
}