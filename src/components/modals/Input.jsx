import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../redux/appSlice";
import getSiteIdByName from "../../services/getSiteIdByName";
import getLocationIdByName from "../../services/getLocationIdByName";

export default function Input({ name, action }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.app.activeModal.data);
    const [inpValue, setInpValue] = useState("");

    useEffect(() => {
        if (action === "edit") {
            if (name === "site") {
                setInpValue(data[`${name}_name`] || "");
            }
            if (name === "location" || name === 'access') {
                setInpValue(data[`${name}_name`] || "");

                getSiteIdByName(data.site_name)
                    .then(id => {
                        dispatch(setModalData({ ...data, site_id: id }));
                    })
                    .catch(err => console.error("Failed to fetch site ID:", err));
            }
            if (name === "cabinet") {
                setInpValue(data[`${name}_name`] || "");

                getLocationIdByName(data.location_name)
                    .then(id => {
                        dispatch(setModalData({ ...data, location_id: id }));
                    })
                    .catch(err => console.error("Failed to fetch site ID:", err));
            }
        }

        if (action === "add") {
            setInpValue("");
            dispatch(setModalData({ ...data, [`${name}_name`]: "" }));
        }
    }, []);

    const handleInputChange = async (event) => {
        const { value } = event.target;

        if (action === 'edit') {
            setInpValue(value);
            if (name === 'site') {
                const normalizedValue = value.trim().replace(/\s+/g, ' ');
                dispatch(setModalData({ ...data, [`${name}_name`]: normalizedValue }));
            }
            if (name === "location" || name === 'access') {
                const normalizedValue = value.trim().replace(/\s+/g, ' ');
                const siteId = await getSiteIdByName(data.site_name);
                dispatch(setModalData({ ...data, [`${name}_name`]: normalizedValue, site_id: siteId }));
            }
            if (name === 'cabinet') {
                const normalizedValue = value.trim().replace(/\s+/g, ' ');
                const locationId = await getLocationIdByName(data.location_name);
                dispatch(setModalData({ ...data, [`${name}_name`]: normalizedValue, location_id: locationId }));
            }
        }
        if (action === 'add') {
            const { value } = event.target;
            setInpValue(value);
            const normalizedValue = value.trim().replace(/\s+/g, ' ');
            dispatch(setModalData({ ...data, [`${name}_name`]: normalizedValue }));
        }
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
