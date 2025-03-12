import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTableData } from "../../redux/appSlice";
import SideBar from "../bars/SideBar";
import getTable from "../../services/getTable";

export default function TableBody({ tableName }) {
    const filterValue = useSelector(state => state.app.filterValue);
    const [records, setRecords] = useState([]);

    const dispatch = useDispatch();
    const data = useSelector(state => state.app.activeTable.data) || [];

    const [objKeys, setObjKeys] = useState([]);

    const tableState = useSelector(state => state.app.tableStates[tableName]) || {};
    const { sortBy, isAsc } = tableState;

    useEffect(() => {
        getTable(tableName)
            .then(result => {
                if (result.length > 0) {
                    dispatch(setActiveTableData(result));
                    setObjKeys(Object.keys(result[0]));
                }
                const filteredData = result.filter(record => {
                    return (
                        record.site_name?.toLowerCase().includes(filterValue) ||
                        record.location_name?.toLowerCase().includes(filterValue) ||
                        record.cabinet_name?.toLowerCase().includes(filterValue) ||
                        record.access_name?.toLowerCase().includes(filterValue)
                    );
                });

                const sortedData = [...filteredData].sort((a, b) => {
                    if (!sortBy) return 0;
                    const valueA = String(a[sortBy] ?? "").toLowerCase();
                    const valueB = String(b[sortBy] ?? "").toLowerCase();
                    return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
                });

                setRecords(sortedData);
            });
    }, [tableName, filterValue, isAsc, sortBy, dispatch]);



    //console.log(sortedData);

    const handleDoubleClick = (record) => {
        console.log(record);
    };

    return (
        <tbody>
            {records.map((record, recordIndex) => (
                <tr key={record.id || `record-${recordIndex}`} onDoubleClick={() => handleDoubleClick(record)}>
                    {objKeys.slice(1).map(objKey => (
                        <td key={objKey}>{record[objKey] ?? "N/A"}</td>
                    ))}
                    <td className="td-edit"><SideBar record={record} /></td>
                </tr>
            ))}
        </tbody>
    );
}
