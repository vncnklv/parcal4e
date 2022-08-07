import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
    ;
import { getArticleById } from "../../../services/article";

import { ImageSlider } from "./image-slider/ImageSlider";

import styles from './Details.module.css';

import { useAuth } from "../../../contexts/AuthProvider";

export const Details = () => {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = useAuth();

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
                    <p>Likes: {article.likes}</p>
                    <div className={styles.buttons}>
                        {(user && user._id == article._ownerId) &&
                            <>
                                <Link to={`/edit/${article._id}`} className={styles.editBtn}>Edit</Link>
                                <Link to={`/delete/${article._id}`} className={styles.delBtn}>Delete</Link>
                            </>
                        }
                        {(user && user._id !== article._ownerId) && <div className={styles.likeBtn}>Like</div>}
                    </div>
                </div>
            </div>
        </main>
    );
}