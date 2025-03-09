import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <Link to='/key-register/keys'>Key Register</Link>
            <Link to='/book-n-stock'>BookNStock</Link>
        </div>
    )
}
