import { useEffect } from 'react';
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal } from '../../redux/modalSlice';

import AddSiteBody from './bodies/add/AddSiteBody';
import AddAccessBody from './bodies/add/AddAccessBody';
import AddCabinetBody from './bodies/add/AddCabinetBody';
import AddLocationBody from './bodies/add/AddLocationBody';
import AddKeyBody from './bodies/add/AddKeyBody';

import EditSiteBody from './bodies/edit/EditSiteBody';
import EditAccessBody from './bodies/edit/EditAccessBody';
import EditCabinetBody from './bodies/edit/EditCabinetBody';
import EditLocationBody from './bodies/edit/EditLocationBody';
import EditKeyBody from './bodies/edit/EditKeyBody';

import DeleteBody from './bodies/delete/DeleteBody';
import SearchBody from './bodies/search/SearchBody';

export default function Modal({ modalName }) {
    const activeTab = useSelector(state => state.tabSlice.activeTabName);
    const dispatch = useDispatch();

    function getSingularTabName(activeTab) {
        return activeTab === 'accesses' ? 'access' : activeTab.slice(0, -1);
    }

    const texts = {
        add: {
            confirm: 'Save',    // was save
            abort: 'Cancel',     // was cancel
            h2: 'Adding ' + getSingularTabName(activeTab)
        },
        delete: {
            confirm: 'Yes',
            abort: 'Cancel',
            h2: 'Deleting ' + getSingularTabName(activeTab),
        },
        edit: {
            confirm: 'Update',
            abort: 'Cancel',
            h2: 'Editing ' + getSingularTabName(activeTab),
        },
        search: {
            confirm: 'Search',
            abort: 'Cancel',
            h2: 'Searching for ' + getSingularTabName(activeTab),
        },
    };

    const bodies = {
        add_key: <AddKeyBody />,
        add_access: <AddAccessBody />,
        add_cabinet: <AddCabinetBody />,
        add_location: <AddLocationBody />,
        add_site: <AddSiteBody />,

        edit_key: <EditKeyBody />,
        edit_access: <EditAccessBody />,
        edit_cabinet: <EditCabinetBody />,
        edit_location: <EditLocationBody />,
        edit_site: <EditSiteBody />,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const exitModal = () => {
        dispatch(setActiveModal(null));
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            dispatch(setActiveModal(null));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <form className={`modal ${modalName}-modal`} onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>{texts[modalName].h2}</h2>
                    <CloseIcon className='icon' onClick={exitModal} />
                </div>

                <div className='modal-body'>
                    {modalName === 'delete' && <DeleteBody />}
                    {modalName === 'search' && <SearchBody />}
                    {modalName !== 'delete' && modalName !== 'search' && bodies[`${modalName}_${getSingularTabName(activeTab)}`]}
                </div>

                <div className='modal-footer'>
                    <button type='submit' className='btn confirm-btn'>{texts[modalName].confirm}</button>
                    <button type='button' className='btn abort-btn' onClick={exitModal}>{texts[modalName].abort}</button>
                </div>

            </div>
        </form>
    );
}
