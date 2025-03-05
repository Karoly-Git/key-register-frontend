import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DeleteBody() {
    const [entityName, setEntityName] = useState('');  // Initialize as empty string

    // Use default shallowEqual for memoization
    const modalData = useSelector(state => state.app.modal.modalData);
    const activeTab = useSelector(state => state.app.activeTab.name);
    console.log(modalData, activeTab);

    useEffect(() => {
        if (activeTab === 'sites') {
            setEntityName(modalData.site_name);
        }
    }, [modalData]); // Only depend on modalData

    return (
        <>
            <p>Are you sure you want to remove <strong className="tab-name">{entityName}</strong>?</p>
        </>
    );
}
