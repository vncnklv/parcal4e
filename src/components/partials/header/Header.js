import styles from "./header.module.css"
import logo from './logo.png';
export const Header = () => {
    return (
        <header className={styles['site-header']}>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </div>
            <img src={logo} className={styles.logo}/>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Logout</li>
                </ul>
            </div>
        </header >
    );
}