import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalData } from "../../../../redux/appSlice";
import getTable from "../../../../services/getTable";

export default function AddLocationBody() {
    const dispatch = useDispatch();
    const [sites, setSites] = useState([]);
    const [locationName, setLocationName] = useState('');
    const [selectedSiteId, setselectedSiteId] = useState('');
    const modalData = useSelector(state => state.app.modal.modalData);

    useEffect(() => {
        getTable('sites')
            .then(result => {
                if (!result.length) return; // Prevent errors if result is empty

                const sortedSites = result.sort((a, b) => {
                    const valueA = String(a['site_name'] ?? "").toLowerCase();
                    const valueB = String(b['site_name'] ?? "").toLowerCase();
                    return valueA.localeCompare(valueB);
                });

                setSites(sortedSites);
                setselectedSiteId(sortedSites[0]?.id); // Prevents undefined errors
                console.log({ site_id: String(sortedSites[0].id) });
                dispatch(setModalData({ ...modalData, site_id: String(sortedSites[0].id) }));
            })
            .catch(error => console.error("Error fetching sites:", error)); // Catch errors
    }, []);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setLocationName(value);
        dispatch(setModalData({ ...modalData, name: value }));
        console.log({ ...modalData, name: value });
    };

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setselectedSiteId(value);
        dispatch(setModalData({ ...modalData, site_id: value }));
        console.log({ ...modalData, site_id: value });
    };

    return (
        <>
            <label htmlFor="">Select a Site:</label>
            <select name="site_id"
                value={selectedSiteId}
                onChange={handleSelectChange}
            >
                {sites.map((site) => (
                    <option key={site.site_name} value={site.id}>{site.site_name}</option>
                ))}
            </select>
            <label htmlFor="location-name-input">Location Name:</label >
            <input
                id='location-name-input'
                required
                type="text"
                name="location-name"
                placeholder='Enter Location Name'
                value={locationName}
                onChange={handleInputChange}
            />
        </>
    );
}
