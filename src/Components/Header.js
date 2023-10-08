import { Link } from "react-router-dom"
import styles from "Assets/Header.module.css"

function Header() {
    return (
        <header>
            <nav>
                <h1 className={styles.title}>React Color Flipper</h1>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} to="/">Simple</Link>
                    <Link className={styles.link} to="/hex">Hex</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header