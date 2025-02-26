import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { KeyRegisterContext } from '../KeyRegister';
import getRecords from '../../../actions/getRecords';
import getRecordById from '../../../actions/getRecordById';
import deleteRecordById from '../../../actions/deleteRecordById';
import updateTable from '../../../actions/updateTable';

export default function DeleteModal({ setData }) {
    const {
        toggleModal,
        activeTab,
        targetId,
        setKeys,
        setCabinets,
        setLocations,
        setSites,
        setAccesses
    } = useContext(KeyRegisterContext);

    const [entityName, setEntityName] = useState('');

    const modalConfig = {
        keys: {
            name: 'Key',
            setter: setKeys,
            message: <p>Are you sure you want to remove <strong className='tab-name'>Key-{entityName}</strong> from the list of Keys?</p>
        },
        accesses: {
            name: 'Access',
            setter: setAccesses,
            message: <p>Are you sure you want to remove <strong className='tab-name'>{entityName}</strong> from the list of Accesses?</p>
        },
        cabinets: {
            name: 'Cabinet',
            setter: setCabinets,
            message: <p>Are you sure you want to remove <strong className='tab-name'>{entityName}</strong> from the list of Cabinets?</p>
        },
        locations: {
            name: 'Location',
            setter: setLocations,
            message: <p>Are you sure you want to remove <strong className='tab-name'>{entityName}</strong> from the list of Locations?</p>
        },
        sites: {
            name: 'Site',
            setter: setSites,
            message: <p>Are you sure you want to remove <strong className='tab-name'>{entityName}</strong> from the list of Sites?</p>
        }
    };

    useEffect(() => {
        getRecordById(targetId, activeTab)
            .then(result => {
                setEntityName(activeTab === 'keys' ? result[0].hook_number : result[0].name);
            });
    }, [targetId, activeTab]);

    const handleDelete = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        deleteRecordById(targetId, activeTab)
            .then(() => {
                getRecords(activeTab)
                    .then(() => {
                        updateTable(activeTab, modalConfig[activeTab].setter);
                        toggleModal('delete');
                    });
            })
            .catch(error => {
                console.error(`Failed to delete ID(${targetId}):`, error);
            });
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            toggleModal('delete');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <form className='modal delete-modal' onSubmit={handleDelete} onKeyDown={handleKeyDown}>
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>Delete <span className='tab-name'>{modalConfig[activeTab].name}</span>?</h2>
                    <CloseIcon className='icon' onClick={() => toggleModal('delete')} />
                </div>

                <div className='modal-body'>
                    {modalConfig[activeTab].message}
                </div>

                <div className='modal-footer'>
                    <button type='submit' className='btn save'>Yes</button>
                    <button type='button' className='btn cancel' onClick={() => toggleModal('delete')}>No</button>
                </div>

            </div>
        </form>
    );
}
