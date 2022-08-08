import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

import { edit, getArticleById } from "../../../services/article";

export const Edit = () => {
    const [article, setArticle] = useState({});
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        getArticleById(id)
            .then(result => {
                if (!result._id) {
                    navigate('/not-found')
                }

                if (!user || user._id !== result._ownerId) {
                    navigate('/');
                }

                setArticle(result)
            });
    }, [id, navigate, user]);

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

        if(index === -1) {
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

    const submitHandler = (e) => {
        e.preventDefault();
        edit(article._id, article)
            .then(() => navigate(`/details/${article._id}`))
            .catch(err => setErrors(err.errors));
    }

    return (
        <main>
            <h1>Edit Article</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="description" value={article.name} onChange={changeHandler} name="name" />
                    </label>
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="brand">
                        Brand
                        <input type="text" id="brand" value={article.brand} onChange={changeHandler} name="brand" />
                    </label>
                    {errors.brand && <div>{errors.brand}</div>}
                </div>
                <div>
                    <label htmlFor="description">
                        Description
                        <textarea type="text" id="description" value={article.description} onChange={changeHandler} name="description" />
                    </label>
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div>
                    <label htmlFor="color">
                        Color
                        <input type="text" id="color" value={article.color} onChange={changeHandler} name="color" />
                    </label>
                    {errors.color && <div>{errors.color}</div>}
                </div>
                <div>
                    <label htmlFor="price">
                        Price
                        <input type="number" id="price" value={article.price} onChange={changeHandler} name="price" />
                    </label>
                    {errors.price && <div>{errors.price}</div>}
                </div>

                <div>
                    <div><span>Sizes</span></div>

                    <input type="checkbox" id="XXS" name="XXS" checked={checked('XXS')} onChange={checkboxChangeHandler} />
                    <label htmlFor="XXS">XXS</label>

                    <input type="checkbox" id="XS" name="XS" checked={checked('XS')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="XS">XS</label>

                    <input type="checkbox" id="S" name="S" checked={checked('S')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="S">S</label>

                    <input type="checkbox" id="M" name="M" checked={checked('M')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="M">M</label>

                    <input type="checkbox" id="L" name="L" checked={checked('L')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="L">L</label>

                    <input type="checkbox" id="XL" name="XL" checked={checked('XL')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="XL">XL</label>
                    
                    <input type="checkbox" id="XXL" name="XXL" checked={checked('XXL')} onChange={checkboxChangeHandler}/>
                    <label htmlFor="XXL">XXL</label>

                    {errors.sizes && <div>{errors.sizes}</div>}
                </div>

                <input type="submit" value="Edit" />
            </form>
        </main>
    );
}