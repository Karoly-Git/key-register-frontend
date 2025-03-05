// Import React hooks and Redux functions
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Import custom components
import SideBar from "../../bars/SideBar";

// Import the service function for fetching table data
import getTable from "../../../services/getTable";

export default function TableBody({ tabName }) {
    const [objKeys, setObjKeys] = useState([]); // Store the object keys
    const [dataObj, setDataObj] = useState([]); // Store the table data

    // Get the table state from Redux
    const tableState = useSelector(state => state.app.tableStates[tabName]) || {};
    const { sortBy, isAsc } = tableState; // Destructure sorting state

    useEffect(() => {
        // Fetch the table data when tabName, sortBy, or isAsc changes
        getTable(tabName).then(result => {
            if (result.length > 0) {
                // Get object keys from the first record (assuming all records have the same structure)
                setObjKeys(Object.keys(result[0]));

                // Sort the data based on the sorting parameters
                const sortedData = [...result].sort((a, b) => {
                    if (!sortBy) return 0; // If no sortBy, return 0 (no sorting)

                    const valueA = String(a[sortBy] ?? "").toLowerCase();
                    const valueB = String(b[sortBy] ?? "").toLowerCase();

                    return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
                });

                setDataObj(sortedData); // Update the state with the sorted data
            }
        });
    }, [tabName, sortBy, isAsc]); // Dependency array ensures it re-runs when these values change

    return (
        <tbody>
            {/* Map over the sorted data and render each record */}
            {dataObj.map((record, recordIndex) => (
                <tr key={record.id || `record-${recordIndex}`}>
                    {/* Map through object keys (skip the first key) to render the table data */}
                    {objKeys.slice(1).map(objKey => (
                        <td key={objKey}>{record[objKey] ?? "N/A"}</td>
                    ))}
                    {/* Render the SideBar component for each record */}
                    <td className="td-edit"><SideBar record={record} /></td>
                </tr>
            ))}
        </tbody>
    );
}
