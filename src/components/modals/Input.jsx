import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";

export default function Input({ name }) {
    const dispatch = useDispatch();
    const [inpValue, setInpValue] = useState("");
    const modalData = useSelector((state) => state.app.modal.modalData) || {};

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInpValue(value);
        dispatch(setModalData({ ...modalData, name: value }));
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
