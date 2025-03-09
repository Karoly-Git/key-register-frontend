import { tables } from "../../app.config";
import Table from '../components/tables/Table';
import { useSelector } from "react-redux";

export default function Main() {
    const activeTableName = useSelector(state => state.app.activeTable.name);

    const table = tables.find(table => table.name === activeTableName);
    return (
        <main>
            <Table tableName={table.name} columns={table.columns} />
        </main>
    )
}
