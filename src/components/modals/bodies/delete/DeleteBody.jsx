import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DeleteBody() {
    const [entity, setEntity] = useState('');
    const data = useSelector(state => state.app.activeModal.data);
    const activeTable = useSelector(state => state.app.activeTable.name);

    useEffect(() => {
        switch (activeTable) {
            case 'sites':
                setEntity(data.site_name);
                break;
            case 'locations':
                setEntity(data.location_name);
                break;
            case 'cabinets':
                setEntity(data.cabinet_name);
                break;
            case 'accesses':
            case 'keys':
                setEntity(data.access_name);
                break;
            default:
                setEntity('');
        }
    }, [data]);

    return (
        <>
            <p>Are you sure you want to remove <strong className="entity-name">{entity}</strong>?</p>
        </>
    );
}
