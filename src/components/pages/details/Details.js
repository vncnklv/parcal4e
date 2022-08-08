import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { deleteArticle, dislike, getArticleById, like } from "../../../services/article";

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
                setArticle(result);
            });
    }, [id, navigate]);

    const likeHandler = () => {
        like(article._id)
            .then(updatedArticle => setArticle(updatedArticle));
    }

    const dislikeHandler = () => {
        dislike(article._id)
            .then(updatedArticle => setArticle(updatedArticle));
    }

    const deleteHandler = () => {
        deleteArticle(article._id)
            .then(() => navigate('/'));
    }

    const showLikeBtn = article.likedBy && user && user._id !== article._ownerId && !article.likedBy.includes(user._id);
    const showDislikeBtn = article.likedBy && user && user._id !== article._ownerId && article.likedBy.includes(user._id);

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
                        {article.sizes && article.sizes.map((s, i) => <span key={i}>{s.toUpperCase()}</span>)}
                    </div>
                    <p>Age group: {article.age_group}</p>
                    <p>Color: {article.color}</p>
                    <p>Price: {article.price} $</p>
                    <p>Likes: {article.likes}</p>
                    <div className={styles.buttons}>
                        {(user && user._id === article._ownerId) &&
                            <>
                                <Link to={`/edit/${article._id}`} className={styles.editBtn}>Edit</Link>
                                <div className={styles.delBtn} onClick={deleteHandler}>Delete</div>
                            </>
                        }
                        {showLikeBtn && <div className={styles.likeBtn} onClick={likeHandler}>Like</div>}
                        {showDislikeBtn && <div className={styles.likeBtn} onClick={dislikeHandler}>Dislike</div>}
                    </div>
                </div>
            </div>
        </main>
    );
}