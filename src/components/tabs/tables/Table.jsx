import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ lable, columns }) {
    return (
        <table className="table">
            <TableHead lable={lable} columns={columns} />
            <TableBody lable={lable} />
        </table>
    )
}
