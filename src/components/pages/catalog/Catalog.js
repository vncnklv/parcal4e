import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByCategory } from "../../../services/article";
import { Article } from "../../common/article/Article";

import styles from "./Catalog.module.css";
import { Filters } from "./filters/Filters";
import { Sorts } from "./sorts/Sorts";

export const Catalog = () => {
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryStringParams, setQueryStringParams] = useState({
        sorts: {},
        filter: {}
    });
    const { category } = useParams();

    useEffect(() => {
        const likesString = searchParams.get('likes');
        const priceString = searchParams.get('price');

        setQueryStringParams(old => {
            const newData = { ...old };
            if (likesString) newData.sorts.likes = likesString;
            if (priceString) newData.sorts.price = priceString;
            return newData;
        });

        getArticlesByCategory(category, queryStringParams.sorts)
            .then(res => setArticles(res.result));
    }, [category, queryStringParams.sorts, searchParams]);

    const sortHandler = (e) => {
        e.preventDefault();

        getArticlesByCategory(category, queryStringParams.sorts)
            .then(res => setArticles(res.result));

        setSearchParams(queryStringParams.sorts);
    };

    const sortChangeHandler = (e) => {
        setQueryStringParams(old => {
            const newData = { ...old };
            if (!e.target.checked) {
                delete newData.sorts[e.target.name];
            } else {
                newData.sorts[e.target.name] = e.target.value;
            }
            return newData;
        });
    };

    return (
        <main>
            <h1>Catalog</h1>
            <div className={styles.container}>
                <div className={styles.filtersConteiner}>
                    <Sorts submitHandler={sortHandler} sorts={queryStringParams.sorts} changeHandler={sortChangeHandler} />
                    <br />
                    <Filters />
                </div>
                <div className={styles.articlesContainer}>
                    {articles.map(a => <Article key={a._id} {...a} />)}
                </div>
            </div>
        </main>
    );
}