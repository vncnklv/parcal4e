import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthProvider";
import { Article } from "../../common/article/Article";

import { getUsersArticles } from "../../../services/article";
import { getUserById } from "../../../services/auth";


import styles from "./UserProfile.module.css"

export const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [articles, setArticles] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            getUserById(user._id)
                .then(res => setUserData(res));

            getUsersArticles()
                .then(res => setArticles(res));
        }
    }, [user._id]);

    return (
        <main>
            <h1>Profile</h1>
            <h2>Your Information</h2>
            <div className={styles.userInfo}>
                <div>
                    {userData?.avatarUrl
                        ? <img src={userData.avatarUrl} alt="User avatar" className={styles.userAvatar} />
                        : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="User avatar" className={styles.userAvatar} />
                    }
                </div>
                <div>
                    <div>
                        Username: {userData?.username}
                    </div>
                    <div>
                        Email: {userData?.email}
                    </div>
                    <div>
                        Onboarded articles: {articles?.length}
                    </div>
                </div>
            </div>

            <div className={styles.btnContainer}>
                <Link to="/user-profile/edit/username"><span className={styles.btn}>Change username</span></Link>
                <Link to="/user-profile/edit/email"><span className={styles.btn}>Change email</span></Link>
                <Link to="/user-profile/edit/avatar"><span className={styles.btn}>Change avatar</span></Link>
                <Link to="/user-profile/edit/password"><span className={styles.btn}>Change password</span></Link>
            </div>

            <Outlet />

            <h2>Your articles</h2>
            {articles.length > 0
                ? <div className={styles.articles}>
                    {articles.map(a => <Article key={a._id} {...a} />)}
                </div>
                : <div>You don't have any articles onboarded!</div>
            }
        </main>
    );
}