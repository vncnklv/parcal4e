import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from "./components/partials/footer/Footer";
import { Header } from "./components/partials/header/Header";

import { Home } from "./components/pages/home/Home";
import { Catalog } from './components/pages/catalog/Catalog';
import { Details } from './components/pages/details/Details';
import { Login } from './components/pages/login/Login';
import { Register } from './components/pages/register/Register';
import { NotFound } from './components/pages/not-found/NotFound';

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/:category' element={<Catalog />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
