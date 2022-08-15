import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

import styles from "./header.module.css"
import logo from './logo.png';

export const Header = () => {
    const { user } = useAuth();
    return (
        <header className={styles['site-header']}>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    <Link to='/catalog/male'><li>Men</li></Link>
                    <Link to='/catalog/female'><li>Women</li></Link>
                </ul>
            </div>
            <Link to='/'>
                <img src={logo} className={styles.logo} alt='logo' />
            </Link>
            <div className={styles['menu-wrapper']}>
                <ul className={styles['header-menu']}>
                    {user
                        ? <>
                            <Link to='/create'><li>Add</li></Link>
                            <Link to='/user-profile'><li>Profile</li></Link>
                            <Link to='/logout'><li>Logout</li></Link>
                        </>
                        : <>
                            <Link to='/login'><li>Login</li></Link>
                            <Link to='/register'><li>Register</li></Link>
                        </>
                    }
                </ul>
            </div>
        </header >
    );
}