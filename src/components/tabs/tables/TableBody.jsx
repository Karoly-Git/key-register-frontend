import { useEffect, useState } from "react";
import SideBar from "../../bars/SideBar";
import getTable from "../../../services/getTable";

export default function TableBody({ lable, columns, data }) {
    const [objKeys, setObjKeys] = useState([]);
    const [dataObj, setDataObj] = useState([]);

    // console.log(lable);

    useEffect(() => {
        getTable(lable)
            .then(result => {
                // console.log(result);
                // console.log(Object.keys(result[0]));

                setDataObj(result);
                setObjKeys(Object.keys(result[0]));
            });
    }, []);


    return (
        <tbody>
            {
                dataObj.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {
                            objKeys.slice(1).map((objKey, objKeyIndex) => (
                                <td key={objKeyIndex}>{row[objKey]}</td>
                            ))
                        }
                        <td className='td-edit'><SideBar /></td>
                    </tr>
                ))
            }
        </tbody>
    )
}
