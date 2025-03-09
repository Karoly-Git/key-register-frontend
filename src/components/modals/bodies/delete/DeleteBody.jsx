import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DeleteBody() {
    const [entity, setEntity] = useState('');  // Initialize as empty string

    // Use default shallowEqual for memoization
    const data = useSelector(state => state.app.modal.data);
    const activeTable = useSelector(state => state.app.activeTable.name);

    useEffect(() => {
        if (activeTable === 'sites') {
            setEntity(data.site_name);
        } else if (activeTable === 'locations') {
            setEntity(data.location_name);
        } else {
            setEntity('ENTITY');
        }
    }, [data]); // Only depend on data

    return (
        <>
            <p>Are you sure you want to remove <strong className="entity-name">{entity}</strong>?</p>
        </>
    );
}
