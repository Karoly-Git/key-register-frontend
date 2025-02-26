import React, { useContext, useEffect } from 'react';

import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import addRecord from '../../../actions/addRecord';
import updateTable from '../../../actions/updateTable';

import { KeyRegisterContext } from '../KeyRegister';

import AddAccessBody from './bodies/AddAccessBody';
import AddSiteBody from './bodies/AddSiteBody';
import AddLocationBody from './bodies/AddLocationBody';
import AddCabinetBody from './bodies/AddCabinetBody';
import AddKeyBody from './bodies/AddKeyBody';

export default function AddModal() {
    const {
        toggleModal,
        activeTab,
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
            body: <AddKeyBody />,
        },
        cabinets: {
            name: 'Cabinet',
            setter: setCabinets,
            body: <AddCabinetBody />,
        },
        locations: {
            name: 'Location',
            setter: setLocations,
            body: <AddLocationBody />,
        },
        sites: {
            name: 'Site',
            setter: setSites,
            body: <AddSiteBody />,
        },
        accesses: {
            name: 'Access',
            setter: setAccesses,
            body: <AddAccessBody />,
        }
    };

    const handleAdd = (event) => {
        event.preventDefault();

        addRecord(activeTab, bodyData)
            .then(() => {
                updateTable(activeTab, modalConfig[activeTab].setter);
            })
            .finally(() => {
                setBodyData({});
                toggleModal('add');
            });
    };

    const handleCancel = () => {
        toggleModal('add');
        setBodyData({});
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleCancel();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <form className='modal add-modal' onSubmit={handleAdd} onKeyDown={handleKeyDown} >
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>Adding <span className='tab-name'>{modalConfig[activeTab].name}</span></h2>
                    <CloseIcon className='icon' onClick={handleCancel} />
                </div>

                {modalConfig[activeTab].body}

                <div className='modal-footer'>
                    <button type='submit' className='btn save'>Add</button>
                    <button type='button' className='btn cancel' onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        </form>
    );
}
