import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ tabName, columns }) {
    return (
        <table className="table">
            <TableHead tabName={tabName} columns={columns} />
            <TableBody tabName={tabName} />
        </table>
    )
}
