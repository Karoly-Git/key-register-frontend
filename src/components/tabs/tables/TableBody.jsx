import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ label }) {
    const [objKeys, setObjKeys] = useState([]);
    const [dataObj, setDataObj] = useState([]);

    const tableState = useSelector(state => state.sortingData.tableStates[label]) || {};
    const { sortBy, isAsc } = tableState;

    useEffect(() => {
        getTable(label)
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
    }, [label, sortBy, isAsc]);

    return (
        <tbody>
            {dataObj.map((row, rowIndex) => (
                <tr key={row.id || `row-${rowIndex}`}>
                    {objKeys.slice(1).map((objKey) => (
                        <td key={objKey}>{row[objKey] ?? "N/A"}</td>
                    ))}
                    <td className="td-edit"><SideBar /></td>
                </tr>
            ))}
        </tbody>
    );
}
