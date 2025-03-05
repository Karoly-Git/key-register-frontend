import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal, setModalData } from '../../redux/modalSlice';
import addRecord from '../../services/addRecord';

import { AiOutlineClose as CloseIcon } from "react-icons/ai";

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

export default function Modal({ activeModal }) {
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.tabSlice.activeTabName);
    const singularTabName = getSingularTabName(activeTab);
    const modalData = useSelector(state => state.modalSlice.modalData); // ✅ Move useSelector here

    function getSingularTabName(activeTab) {
        return activeTab === 'accesses' ? 'access' : activeTab.slice(0, -1);
    }

    const texts = {
        add: {
            confirm: 'Save',
            abort: 'Cancel',
            h2: 'Adding ' + singularTabName,
        },
        delete: {
            confirm: 'Yes',
            abort: 'Cancel',
            h2: 'Deleting ' + singularTabName,
        },
        edit: {
            confirm: 'Update',
            abort: 'Cancel',
            h2: 'Editing ' + singularTabName,
        },
        search: {
            confirm: 'Search',
            abort: 'Cancel',
            h2: 'Searching for ' + singularTabName,
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
        if (modalData) {
            console.log(modalData);
            addRecord(activeTab, modalData);
        }
        exitModal();
    };

    const exitModal = () => {
        dispatch(setModalData(null));
        dispatch(setActiveModal(null));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            exitModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <form className={`modal ${activeModal}-modal`} onSubmit={handleSubmit}>
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>{texts[activeModal].h2}</h2>
                    <CloseIcon className='icon' onClick={exitModal} />
                </div>

                <div className='modal-body'>
                    {activeModal === 'delete' && <DeleteBody />}
                    {activeModal === 'search' && <SearchBody />}
                    {activeModal !== 'delete' && activeModal !== 'search' && bodies[`${activeModal}_${getSingularTabName(activeTab)}`]}
                </div>

                <div className='modal-footer'>
                    <button type='submit' className='btn confirm-btn'>{texts[activeModal].confirm}</button>
                    <button type='button' className='btn abort-btn' onClick={exitModal}>{texts[activeModal].abort}</button>
                </div>

            </div>
        </form>
    );
}
