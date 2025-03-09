import SearchBar from '../components/bars/SearchBar';
import MainNav from '../components/navigations/MainNav';

export default function Header() {
    return (
        <header>
            {false && <MainNav />}
            <SearchBar />
        </header>
    )
}
