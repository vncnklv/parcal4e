import styles from './Pager.module.css';

export const Pager = ({ page, maxPages, goToPrevPage, goToNextPage }) => {
    return (
        <div className={styles.container}>
            {page > 1 && <div className={styles.btn} onClick={goToPrevPage}>Previous</div>}
            <div>{page}</div>
            {page < maxPages && <div className={styles.btn} onClick={goToNextPage}>Next</div>}
        </div>
    );
}