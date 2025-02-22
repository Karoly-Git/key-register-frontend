import { Link } from 'react-router-dom';
import styles from '../../styles/MainNav.module.css';

export default function MainNav() {
    return (
        <nav className={styles["main-nav"]}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user/login'>Login</Link></li>
            </ul>
        </nav>
    );
}
