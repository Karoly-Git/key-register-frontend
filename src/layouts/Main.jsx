import { useEffect, useState } from "react";
import { tables } from "../../app.config";
import Table from '../components/tables/Table';
//import { useSelector } from "react-redux";

export default function Main({ page }) {
    const [table, setTable] = useState(null);
    //const activeTableName = useSelector(state => state.app.activeTable.name);


    useEffect(() => {
        setTable(null);
        const foundTable = tables.find(table => table.name === page);
        setTable(foundTable);
    }, [page]);

    return (
        <main>
            {table ? (
                <Table tableName={table.name} columns={table.columns} />
            ) : (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            )}
        </main>
    );
}
