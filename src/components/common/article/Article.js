import styles from './Article.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Article = ({
    images,
    name,
    brand,
    price,
    likes
}) => {
    return (
        <article className={styles['article-container']}>
            <div>
                <img src={images[0]} className={styles['article-image']} />
            </div>
            <div className={styles['article-information']}>
                <div>
                    <p>{name}</p>
                    <p>{brand}</p>
                    <div className={styles['more-article-information']}>
                        <p>{price.toFixed(2)} $</p>
                        <div>
                            <span className={styles.likes}>{likes}</span>
                            <FontAwesomeIcon icon={faHeart} className={styles['like-btn']} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}