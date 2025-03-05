import { useDispatch } from "react-redux";
import { useState } from "react";
import { setModalData } from "../../../../redux/modalSlice";

export default function AddSiteBody() {
    const dispatch = useDispatch();
    const [siteName, setSiteName] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        const newModalData = { name: value };
        setSiteName(value);
        dispatch(setModalData(newModalData));
        //console.log(newModalData);
    };

    return (
        <>
            <label htmlFor="inp">Site Name:</label>
            <input
                id='inp'
                required
                type="text"
                name="site-name"
                placeholder='Enter Site Name'
                value={siteName}
                onChange={handleInputChange}
            />
        </>
    );
}
