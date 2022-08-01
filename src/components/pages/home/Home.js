import { useEffect, useState } from "react";
import { Article } from "../../common/article/Article";
import styles from "./Home.module.css";

export const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/articles/most-liked')
            .then(res => res.json())
            .then(data => { setArticles(data) 
            console.log(data);
            })
    }, []);

    return (
        <main>
            <h1>MOST LIKED</h1>
            <div className={styles.articles}>
                {articles.map(a => <Article key={a._id} {...a} />)}
            </div>
        </main>
    );
}