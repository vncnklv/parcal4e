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
            <div className={styles['slider-container']}>
                <ImageSlider images={article.images}/>
            </div>
        </main>
    );
}