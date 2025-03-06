import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DeleteBody() {
    const [entity, setEntity] = useState('');  // Initialize as empty string

    // Use default shallowEqual for memoization
    const modalData = useSelector(state => state.app.modal.modalData);
    const activeTab = useSelector(state => state.app.activeTab.name);

    useEffect(() => {
        if (activeTab === 'sites') {
            setEntity(modalData.site_name);
        } else if (activeTab === 'locations') {
            setEntity(modalData.site_name);
        } else {
            setEntity('ENTITY');
        }
    }, [modalData]); // Only depend on modalData

    return (
        <>
            <p>Are you sure you want to remove <strong className="entity-name">{entity}</strong>?</p>
        </>
    );
}
