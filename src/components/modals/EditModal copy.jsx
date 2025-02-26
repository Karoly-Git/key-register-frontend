import React, { useContext, useEffect } from 'react';

import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import updateRecordById from '../../../actions/updateRecordById';
import updateTable from '../../../actions/updateTable';

import { KeyRegisterContext } from '../KeyRegister';

import EditAccessBody from './bodies/EditAccessBody';
import EditSiteBody from './bodies/EditSiteBody';
import EditLocationBody from './bodies/EditLocationBody';
import EditCabinetBody from './bodies/EditCabinetBody';
import EditKeyBody from './bodies/EditKeyBody';

export default function EditModal() {
    const {
        toggleModal,
        activeTab,
        targetId,
        setKeys,
        setCabinets,
        setLocations,
        setSites,
        setAccesses,
        bodyData,
        setBodyData
    } = useContext(KeyRegisterContext);

    const modalConfig = {
        keys: {
            name: 'Key',
            setter: setKeys,
            body: <EditKeyBody />,
        },
        cabinets: {
            name: 'Cabinet',
            setter: setCabinets,
            body: <EditCabinetBody />,
        },
        locations: {
            name: 'Location',
            setter: setLocations,
            body: <EditLocationBody />,
        },
        sites: {
            name: 'Site',
            setter: setSites,
            body: <EditSiteBody />,
        },
        accesses: {
            name: 'Access',
            setter: setAccesses,
            body: <EditAccessBody />,
        }
    };

    const handleUpdate = () => {
        updateRecordById(targetId, activeTab, bodyData)
            .then(() => {
                updateTable(activeTab, modalConfig[activeTab].setter);
            })
            .finally(() => {
                setBodyData({});
                toggleModal('edit');
            });
    };

    const handleCancel = () => {
        toggleModal('edit');
        setBodyData({});
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            toggleModal('edit')
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return (
        <div className='modal edit-modal'>
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>Editing <span className='tab-name'>{modalConfig[activeTab].name}</span></h2>
                    <CloseIcon className='icon' onClick={handleCancel} />
                </div>

                {modalConfig[activeTab].body}

                <div className='modal-footer'>
                    <button className='btn save' onClick={() => handleUpdate(targetId, activeTab, bodyData)}>Update</button>
                    <button className='btn cancel' onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
