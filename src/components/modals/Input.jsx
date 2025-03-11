import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";

export default function Input({ name, action }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.app.activeModal.data);
    const [inpValue, setInpValue] = useState("");

    useEffect(() => {
        if (action === 'edit') {
            setInpValue(data[`${name}_name`] || '');
        } else if (action === 'add') {
            setInpValue('');
            dispatch(setModalData({ ...data, [`${name}_name`]: '' }));
        }
    }, [])

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInpValue(value);
        dispatch(setModalData({ ...data, [`${name}_name`]: value }));
    };

    return (
        <>
            <label htmlFor={`${name}-name-input`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}:
            </label>
            <input
                id={`${name}-name-input`}
                required
                type="text"
                name={name}
                placeholder={`Enter ${name}`}
                value={inpValue}
                onChange={handleInputChange}
            />
        </>
    );
}
