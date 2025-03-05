import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTableData } from "../../../redux/appSlice";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ tabName }) {
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.app.activeTab.tableData) || [];

    const [objKeys, setObjKeys] = useState([]);

    // Get sorting state from Redux
    const tableState = useSelector(state => state.app.tableStates[tabName]) || {};
    const { sortBy, isAsc } = tableState;

    useEffect(() => {
        // Fetch table data and store it in Redux
        getTable(tabName)
            .then(result => {
                if (result.length > 0) {
                    dispatch(setActiveTableData(result));
                    setObjKeys(Object.keys(result[0]));
                }
            });
    }, [tabName, dispatch]);

    // Sort data if sorting is enabled
    const sortedData = [...tableData].sort((a, b) => {
        if (!sortBy) return 0;
        const valueA = String(a[sortBy] ?? "").toLowerCase();
        const valueB = String(b[sortBy] ?? "").toLowerCase();
        return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    return (
        <tbody>
            {sortedData.map((record, recordIndex) => (
                <tr key={record.id || `record-${recordIndex}`}>
                    {objKeys.slice(1).map(objKey => (
                        <td key={objKey}>{record[objKey] ?? "N/A"}</td>
                    ))}
                    <td className="td-edit"><SideBar record={record} /></td>
                </tr>
            ))}
        </tbody>
    );
}
