import { Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <nav className='main-nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user/login'>Login</Link></li>
            </ul>
        </nav>
    );
}
