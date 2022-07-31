import { Home } from "./components/home/Home";
import { Footer } from "./components/partials/footer/Footer";
import { Header } from "./components/partials/header/Header";

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
