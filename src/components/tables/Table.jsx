// Import child components
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function Table({ tableName, columns }) {
    return (
        <table className={`table ${tableName}-table`}>
            <TableHead tableName={tableName} columns={columns} />
            <TableBody tableName={tableName} />
        </table>
    );
}
