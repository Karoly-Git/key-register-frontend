import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getTable from "../../services/getTable";

export default function Select({ name }) {
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.app.modal.modalData);
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        getTable(name === 'access' ? 'accesses' : `${name}s`)
            .then((result) => {
                if (!result.length) return;

                const sortedResult = result.sort((a, b) => {
                    const valueA = String(a[`${name}_name`] ?? "").toLowerCase();
                    const valueB = String(b[`${name}_name`] ?? "").toLowerCase();
                    return valueA.localeCompare(valueB);
                });

                setData(sortedResult);
                setSelectedId(sortedResult[0]?.id);

                // Directly update the modalData with the new ID
                dispatch(setModalData({
                    ...modalData, // Preserve existing data
                    [`${name}_id`]: sortedResult[0]?.id, // Add the new value
                }));
            })
            .catch((error) => console.error(`Error fetching ${name}:`, error));
    }, []);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedId(value);

        // Directly update the modalData with the selected value

        console.log(modalData);
        dispatch(setModalData({
            ...modalData, // Preserve existing data
            [`${name}_id`]: value, // Update the specific ID
        }));
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
