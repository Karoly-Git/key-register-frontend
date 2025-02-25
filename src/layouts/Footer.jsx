export default function Footer() {
    return (
        <footer>
            <p>
                © <span className="year">{new Date().getFullYear()} </span>
                <a href="https://karolyhornyak.co.uk" target="_blank" rel="noopener noreferrer">Karoly Hornyak</a>
            </p>
        </footer>)
}
