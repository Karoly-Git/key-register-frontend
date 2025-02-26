import React, { useContext, useEffect, useState } from 'react';
import getRecords from '../../../../actions/getRecords';
import { KeyRegisterContext } from '../../KeyRegister';

export default function AddCabinetBody() {
    const { bodyData, setBodyData } = useContext(KeyRegisterContext);
    const [sites, setSites] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Promise.all([getRecords('sites'), getRecords('locations')])
            .then(([sitesData, locationsData]) => {
                setSites(sitesData);

                // Default to first site and its locations
                const filteredLocations = locationsData.filter(location => location.site_id === sitesData[0].id);
                setLocations(filteredLocations);

                // Set the site_id and location_id in bodyData
                setBodyData(prevData => ({
                    ...prevData,
                    site_id: sitesData[0].id,
                    location_id: filteredLocations[0].id
                }));
            });
    }, []);

    const handleSiteSelectChange = (event) => {
        const siteId = parseInt(event.target.value);

        getRecords('locations')
            .then(locationsData => {
                const filteredLocations = locationsData.filter(location => location.site_id === siteId);
                setLocations(filteredLocations);

                // Update site_id and reset location_id based on the new selection
                setBodyData(prevData => ({
                    ...prevData,
                    site_id: siteId,
                    location_id: filteredLocations.length > 0 ? filteredLocations[0].id : ''
                }));
            });
    };

    const handleLocationSelectChange = (event) => {
        const locationId = event.target.value;
        setBodyData(prevData => ({
            ...prevData,
            location_id: locationId
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBodyData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='modal-body'>
            <label htmlFor="inp">Choose a Site:</label>
            <select name="site_id" value={bodyData.site_id || ''} onChange={handleSiteSelectChange} >
                {sites.map((site) => (
                    <option key={site.id} value={site.id}>
                        {site.name}
                    </option>
                ))}
            </select>

            <label htmlFor="inp">Choose a Cabinet Location:</label >
            <select name="location_id" value={bodyData.location_id || ''} onChange={handleLocationSelectChange} >
                {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                        {location.name}
                    </option>
                ))}
            </select>

            <label htmlFor="inp">Name the Cabinet:</label >
            <input
                id='inp'
                required
                type="text"
                placeholder='Add a cabinet name'
                name="name"
                value={bodyData.name || ''}
                onChange={handleInputChange}
            />
        </div >
    );
}
