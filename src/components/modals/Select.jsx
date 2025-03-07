import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getTable from "../../services/getTable";

export default function Select({ name }) {
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.app.modalData) || {}; // Ensure modalData exists
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        if (!name) return; // Prevent errors if name is missing

        getTable(name === 'access' ? 'accesses' : `${name}s`)
            .then((result) => {
                if (!result.length) return;

                const sortedResult = result.sort((a, b) => {
                    const valueA = String(a[`${name}_name`] ?? "").toLowerCase();
                    const valueB = String(b[`${name}_name`] ?? "").toLowerCase();
                    return valueA.localeCompare(valueB);
                });

                setData(sortedResult);
                setSelectedId(sortedResult[0]?.id || ""); // Set default selection

                dispatch(setModalData({ ...modalData, [`${name}_id`]: sortedResult[0]?.id || "" }));
            })
            .catch((error) => console.error(`Error fetching ${name}:`, error));
    }, [dispatch, name]);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedId(value);
        dispatch(setModalData({ ...modalData, [`${name}_id`]: value }));
    };

    return (
        <>
            <label htmlFor={`${name}_id`}>Select {name}:</label>
            <select name={`${name}_id`} value={selectedId} onChange={handleSelectChange}>
                {data.map((record) => (
                    <option key={record.id} value={record.id}>
                        {record[`${name}_name`]}
                    </option>
                ))}
            </select>
        </>
    );
}
