import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalData } from "../../../../redux/appSlice";

export default function AddSiteBody() {
    const dispatch = useDispatch();
    const [siteName, setSiteName] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        const newModalData = { name: value };
        setSiteName(value);
        dispatch(setModalData(newModalData));
    };

    return (
        <>
            <label htmlFor="site-name-input">Site Name:</label>
            <input
                id='site-name-input'
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
