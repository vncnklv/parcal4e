import { Link } from "react-router-dom";
import styles from "./header.module.css"
import logo from './logo.png';
export const Header = () => {
    return (
        <header className={styles['site-header']}>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    <Link to='/catalog/men'><li>Men</li></Link>
                    <Link to='/catalog/women'><li>Women</li></Link>
                    <Link to='/catalog/kids'><li>Kids</li></Link>
                </ul>
            </div>
            <Link to='/'>
                <img src={logo} className={styles.logo} alt='logo'/>
            </Link>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/register'><li>Register</li></Link>
                    <Link to='/logout'><li>Logout</li></Link>
                </ul>
            </div>
        </header >
    );
}