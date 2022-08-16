import { useEffect, useState } from "react";
import { Article } from "../../common/article/Article";

import { getBestSellers } from "../../../services/article";

import styles from "./Home.module.css";
import { useAuth } from "../../../contexts/AuthProvider";

export const Home = () => {
    const [articles, setArticles] = useState([]);
    const { isAuth } = useAuth();

    useEffect(() => {
        getBestSellers()
            .then(result => setArticles(result));
    }, [isAuth]);

    return (
        <main>
            <h1>MOST LIKED</h1>
            <div className={styles.articles}>
                {articles.map(a => <Article key={a._id} {...a} />)}
            </div>
        </main>
    );
}