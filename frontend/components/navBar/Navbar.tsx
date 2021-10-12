import styles from './Navbar.module.css';

const Navbar = () => (
    <div className={styles.navWrapper}>
        <h1> Demo Shop </h1>
        <input className={styles.styledInput} value="search for something" />
    </div>
)

export default Navbar
