import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ label }) {
    const [objKeys, setObjKeys] = useState([]);
    const [dataObj, setDataObj] = useState([]);

    const tablesSortedBy = useSelector(state => state.sortingData.tablesSortedBy);
    console.log(tablesSortedBy);
    const sortBy = tablesSortedBy[label];
    const isAscending = useSelector(state => state.sortingData.isAscending);

    // const sortBy = 'site' + '_name';
    console.log('Sort By:', sortBy, 'Is Asc:', isAscending);

    // console.log('label:', label);

    useEffect(() => {
        getTable(label)
            .then(result => {
                // console.log(result);

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
    }, [isAscending]);

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
