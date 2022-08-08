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

import styles from "./App.module.css"
import { AuthProvider } from './contexts/AuthProvider';

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
                        <Route path='/edit/:id' element={<Edit />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/not-found' element={<NotFound />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
