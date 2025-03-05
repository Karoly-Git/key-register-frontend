import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ tabName }) {
    const [objKeys, setObjKeys] = useState([]);
    const [dataObj, setDataObj] = useState([]);

    const tableState = useSelector(state => state.dataSlice.tableStates[tabName]) || {};
    const { sortBy, isAsc } = tableState;

    useEffect(() => {
        getTable(tabName)
            .then(result => {
                if (result.length > 0) {
                    setObjKeys(Object.keys(result[0]));

                    const sortedData = [...result].sort((a, b) => {
                        if (!sortBy) return 0;

                        const valueA = String(a[sortBy] ?? "").toLowerCase();
                        const valueB = String(b[sortBy] ?? "").toLowerCase();

                        return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
                    });

                    setDataObj(sortedData);
                }
            });
    }, [tabName, sortBy, isAsc]);

    return (
        <tbody>
            {dataObj.map((record, recordIndex) => (
                <tr key={record.id || `record-${recordIndex}`}>
                    {objKeys.slice(1).map((objKey) => (
                        <td key={objKey}>{record[objKey] ?? "N/A"}</td>
                    ))}
                    <td className="td-edit"><SideBar record={record} /></td>
                </tr>
            ))}
        </tbody>
    );
}
