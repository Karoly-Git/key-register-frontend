// Import child components
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function Table({ tabName, columns }) {
    return (
        <table className="table">
            {/* Render TableHead component */}
            <TableHead tabName={tabName} columns={columns} />

            {/* Render TableBody component */}
            <TableBody tabName={tabName} />
        </table>
    );
}
