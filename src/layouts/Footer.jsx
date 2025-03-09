import TableNav from "../components/navigations/TableNav";

export default function Footer() {
    return (
        <footer>
            <TableNav />
            <div className="developer">
                © <span className="year">{new Date().getFullYear()} </span>
                <a href="https://karolyhornyak.co.uk" target="_blank" rel="noopener noreferrer">Karoly Hornyak</a>
            </div>
        </footer>)
}
