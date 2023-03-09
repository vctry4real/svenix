import styles from './App.module.scss';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { HomePage } from './components/home-page/home-page';

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <HomePage />
            <Footer className={styles.Footer} />
        </div>
    );
}

export default App;
