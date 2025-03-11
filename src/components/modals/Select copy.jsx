import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getTable from "../../services/getTable";

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

                    dispatch(setModalData({
                        ...modalData,
                        ...sortedResult[0]
                    }));
                })

                .catch((error) => console.error(`Error fetching ${name}:`, error));
        }
    }, []);

    // Handle select change
    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedId(value);

        const selectedItem = data.find((item) => String(item.id) === value);

        dispatch(setModalData({
            ...modalData, // Preserve previous modal data
            [`${name}_id`]: value, // Update the specific ID
            [`${name}_name`]: selectedItem ? selectedItem[`${name}_name`] : "", // Ensure we update the name too
        }));
    };

    return (
        <>
            <label htmlFor={`${name}-select`}>Select {name}:</label>
            <select id={`${name}-select`} name={`${name}_id`} value={selectedId} onChange={handleSelectChange}>
                {data.map((record, recIndex) => (
                    <option key={record.id || recIndex} value={record.id || recIndex}>
                        {record[`${name}_name`] || record}
                    </option>
                ))}
            </select>
        </>
    );
}
