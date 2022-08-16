import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from "./components/partials/footer/Footer";
import { Header } from "./components/partials/header/Header";

import { Home } from "./components/pages/home/Home";
import { Catalog } from './components/pages/catalog/Catalog';
import { Details } from './components/pages/details/Details';
import { Login } from './components/pages/login/Login';
import { Register } from './components/pages/register/Register';
import { NotFound } from './components/pages/not-found/NotFound';
import { Logout } from './components/pages/logout/Logout';
import { Edit } from './components/pages/edit/Edit';
import { Create } from './components/pages/create/Create';
import { UserProfile } from './components/pages/user-profile/UserProfile';
import { EditUser } from './components/pages/user-profile/edit-user/EditUser';

import styles from "./App.module.css"
import { AuthProvider } from './contexts/AuthProvider';
import { RouteGuard } from './components/RouteGuard';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className={styles.container}>
                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog/:category' element={<Catalog />} />
                        <Route path='/details/:id' element={<Details />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/not-found' element={<NotFound />} />

                        <Route element={<RouteGuard />}>
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/edit/:id' element={<Edit />} />
                            <Route path='/user-profile' element={<UserProfile />} >
                                <Route path="edit">
                                    <Route path="username" element={<EditUser attribute="username" />} />
                                    <Route path="avatar" element={<EditUser attribute="avatar" />} />
                                    <Route path="email" element={<EditUser attribute="email" />} />
                                    <Route path="password" element={<EditUser attribute="password" />} />
                                </Route>
                            </Route>
                            <Route path='/create' element={<Create />} />
                        </Route>

                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
