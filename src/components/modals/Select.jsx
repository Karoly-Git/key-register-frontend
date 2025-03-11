import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getTable from "../../services/getTable";

export default function Select({ name }) {
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.app.activeModal.data);
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        if (name === 'hook') {
            const fetchedData = [3, 1, 4, 2, 5];
            fetchedData.sort((a, b) => a - b);
            setData(fetchedData);

            if (fetchedData.length > 0) {
                setSelectedId(0);

                dispatch(setModalData({
                    [`${name}_id`]: fetchedData[0],
                    [`${name}_name`]: fetchedData[0]
                }));
            }
        } else {
            getTable(name === 'access' ? 'accesses' : `${name}s`)
                .then((result) => {
                    if (!result.length) return;

                    const sortedResult = result.sort((a, b) => {
                        const valueA = String(a[`${name}_name`] ?? "").toLowerCase();
                        const valueB = String(b[`${name}_name`] ?? "").toLowerCase();
                        return valueB.localeCompare(valueA);
                    });

                    setData(sortedResult);

                    if (sortedResult.length > 0) {
                        setSelectedId(sortedResult[0].id);

                        dispatch(setModalData({
                            [`${name}_id`]: sortedResult[0].id,
                            [`${name}_name`]: sortedResult[0][`${name}_name`],
                        }));
                    }
                })
                .catch((error) => console.error(`Error fetching ${name}:`, error));
        }
    }, [name, dispatch]);

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedId(value);

        const selectedItem = data.find((item) => String(item.id) === value);

        dispatch(setModalData({
            [`${name}_id`]: value,
            [`${name}_name`]: selectedItem ? selectedItem[`${name}_name`] : "",
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
