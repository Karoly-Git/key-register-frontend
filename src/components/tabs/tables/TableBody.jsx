import { useEffect, useState } from "react";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ lable }) {
    const [objKeys, setObjKeys] = useState([]);
    const [dataObj, setDataObj] = useState([]);

    const sortBy = 'site' + '_name';    // to be movet to redux store
    const isAscending = true;           // to be movet to redux store

    console.log(lable);

    useEffect(() => {
        getTable(lable)
            .then(result => {
                console.log(result);

                if (result.length > 0) {
                    setObjKeys(Object.keys(result[0]));

                    const sortedData = [...result].sort((a, b) => {
                        if (isAscending) {
                            if (a[sortBy] < b[sortBy]) return -1;
                            if (a[sortBy] > b[sortBy]) return 1;
                            return 0;
                        } else {
                            if (a[sortBy] > b[sortBy]) return -1;
                            if (a[sortBy] < b[sortBy]) return 1;
                            return 0;
                        }
                    });

                    setDataObj(sortedData);
                }
            });
    }, [lable, sortBy, isAscending]); // Depend on lable to refetch if it changes

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
