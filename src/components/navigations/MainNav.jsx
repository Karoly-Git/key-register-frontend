import { Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Key-register</Link>
                </li>
                <li>
                    <Link to='/user/register'>Register</Link>
                </li>
                <li>
                    <Link to='/user/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}
