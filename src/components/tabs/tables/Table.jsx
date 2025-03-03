import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ label, columns }) {
    return (
        <table className="table">
            <TableHead label={label} columns={columns} />
            <TableBody label={label} />
        </table>
    )
}
