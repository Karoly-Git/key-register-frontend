import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getTable from "../../services/getTable";
import getHooksByCabinetId from "../../services/getHooksByCabinetId";

export default function Select({ name }) {
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.app.activeModal.data);
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    const cabinetId = 1;

    useEffect(() => {
        if (name === 'hook') {
            const fetchedData = [3, 1, 4, 2, 5];
            fetchedData.sort((a, b) => a - b);
            setData(fetchedData);
        } else {
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

                    // Directly update the data with the new ID
                    dispatch(setModalData({
                        ...modalData, // Preserve existing data
                        [`${name}_id`]: sortedResult[0]?.id, // Add the new value
                    }));
                })
                .catch((error) => console.error(`Error fetching ${name}:`, error));
        }
    }, []);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedId(value);

        // Directly update the data with the selected value

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
                {data.map((record, recIndex) => (
                    <option key={record.id || recIndex} value={record.id || recIndex}>
                        {record[`${name}_name`] || record}
                    </option>
                ))}
            </select>
        </>
    );
}
