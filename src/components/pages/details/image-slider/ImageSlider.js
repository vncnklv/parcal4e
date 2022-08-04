import { useState } from 'react';
import styles from './ImageSlider.module.css';

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

console.log(styles);

export const ImageSlider = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: images && `url(${images[slideIndex]})`,
    };

    const goToPrevious = () => {
        setSlideIndex(i => i == 0 ? images.length - 1 : i - 1)
    };

    const goToNext = () => {
        setSlideIndex(i => i == images.length - 1 ? 0 : i + 1)
    };

    const goToSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={styles.slider}>
            <div>
                <div onClick={goToPrevious} className={styles.leftArrow}>
                    ❰
                </div>
                <div onClick={goToNext} className={styles.rightArrow}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div className={styles.dotsContainer}>
                {images && images.map((slide, slideIndex) => (
                    <div
                        className={styles.dot}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
}