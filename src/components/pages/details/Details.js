import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../../../services/article";
import { ImageSlider } from "./image-slider/ImageSlider";

import styles from './Details.module.css';

export const Details = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getArticleById(id)
            .then(result => {
                if (!result._id) {
                    navigate('/not-found')
                }
                setArticle(result)
            });
    }, [id, navigate]);

    return (
        <main>
            <div className={styles.container}>
                <div className={styles['slider-container']}>
                    <ImageSlider images={article.images} />
                </div>
                <div className={styles.articleInfo}>
                    <h1 className={styles.name}>{article.name}</h1>
                    <p className={styles.brand}>{article.brand}</p>
                    <hr />
                    <p>{article.description}</p>
                    <div className={styles.sizes}>
                        Available in sizes:
                        {article.sizes && article.sizes.map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                    <p>Age group: {article.age_group}</p>
                    <p>Color: {article.color}</p>
                    <p>Price: {article.price} $</p>
                    <div className={styles.buttons}>
                        {/* show if user is owner */}
                        <div className={styles.editBtn}>Edit</div>
                        <div className={styles.delBtn}>Delete</div>
                        {/* show if user is not owner or there is not user */}
                        <div className={styles.likeBtn}>Like</div>
                    </div>
                </div>
            </div>
        </main>
    );
}