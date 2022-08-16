import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByCategory } from "../../../services/article";
import { Article } from "../../common/article/Article";

import styles from "./Catalog.module.css";

import { Pager } from "./pager/Pager";
import { Sorts } from "./sorts/Sorts";

export const Catalog = () => {
    const [articles, setArticles] = useState([]);
    const [sorts, setSorts] = useState({});
    const [pages, setPages] = useState({
        page: 1
    });
    const { category } = useParams();

    useEffect(() => {
        getArticlesByCategory(category, sorts, pages.page)
            .then(res => {
                setArticles(res.result);
                setPages(oldPages => ({
                    ...oldPages,
                    maxPages: Number(res.max_pages)
                }));
            });
    }, [category, pages.page, sorts]);

    const sortHandler = (newSortData) => {
        setSorts(newSortData);
    };


    const goToNextPage = () => {
        setPages(old => ({
            ...old,
            page: old.page === old.maxPages ? old.page : old.page + 1
        }));
    }

    const goToPrevPage = () => {
        setPages(old => ({
            ...old,
            page: old.page === 1 ? old.page : old.page - 1
        }));
    }

    return (
        <>
            <h1>Catalog</h1>
            <div className={styles.container}>
                <div className={styles.sortsContainer}>
                    <Sorts sort={sortHandler} />
                </div>
                <div className={styles.articlesContainer}>
                    {articles.map(a => <Article key={a._id} {...a} />)}
                </div>
            </div>
            <Pager {...pages} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
        </>
    );
}