import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal, setModalData, setActiveTableData } from '../../redux/appSlice';

import getTable from '../../services/getTable';
import addRecord from '../../services/addRecord';
import deleteRecordById from '../../services/deleteRecordById';

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

export default function Modal() {
    const dispatch = useDispatch();
    const activeModal = useSelector(state => state.app.modal.activeModal);
    const activeTab = useSelector(state => state.app.activeTab.name);
    const singularTabName = getSingularTabName(activeTab);
    const modalData = useSelector(state => state.app.modal.modalData);

    function getSingularTabName(activeTab) {
        return activeTab === 'accesses' ? 'access' : activeTab.slice(0, -1);
    }

    const texts = {
        add: { confirm: 'Save', abort: 'Cancel', h2: 'Adding ' + singularTabName },
        delete: { confirm: 'Yes', abort: 'Cancel', h2: 'Deleting ' + singularTabName },
        edit: { confirm: 'Update', abort: 'Cancel', h2: 'Editing ' + singularTabName },
        search: { confirm: 'Search', abort: 'Cancel', h2: 'Searching for ' + singularTabName },
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (modalData) {
            if (activeModal === 'add') {
                await addRecord(activeTab, modalData); // Ensure record is added first
            } else if (activeModal === 'delete') {
                await deleteRecordById(activeTab, modalData.id); // Ensure deletion completes
            }

            // Fetch updated table data after modification
            getTable(activeTab)
                .then(result => {
                    dispatch(setActiveTableData(result));
                });
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
