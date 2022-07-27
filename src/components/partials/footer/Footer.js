import styles from "./footer.module.css";

export const Footer = () => {
    console.log(styles);
    return (
        <footer className={styles.footer}>
            SoftUni Front-End Course Exam Project &copy; 2022
        </footer>
    );
}