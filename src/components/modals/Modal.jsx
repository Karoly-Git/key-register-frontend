import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModalName, resetModalData, setActiveTableData } from '../../redux/appSlice';

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
    const activeModalName = useSelector(state => state.app.activeModal.name);
    const activeTable = useSelector(state => state.app.activeTable.name);
    const singularTabName = getSingularTabName(activeTable);
    const data = useSelector(state => state.app.activeModal.data);

    function getSingularTabName(activeTable) {
        return activeTable === 'accesses' ? 'access' : activeTable.slice(0, -1);
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

        if (data) {
            if (activeModalName === 'add') {
                await addRecord(activeTable, data); // Ensure record is added first
            } else if (activeModalName === 'delete') {
                await deleteRecordById(activeTable, data.id); // Ensure deletion completes
            }

            // Fetch updated table data after modification
            getTable(activeTable)
                .then(result => {
                    dispatch(setActiveTableData(result));
                });
        }

        exitModal();
    };

    const exitModal = () => {
        dispatch(resetModalData());
        dispatch(setActiveModalName(''));
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
        <form className={`modal ${activeModalName}-modal`} onSubmit={handleSubmit}>
            <div className='modal-container'>

                <div className='modal-head'>
                    <h2>{texts[activeModalName].h2}</h2>
                    <CloseIcon className='icon' onClick={exitModal} />
                </div>

                <div className='modal-body'>
                    {activeModalName === 'delete' && <DeleteBody />}
                    {activeModalName === 'search' && <SearchBody />}
                    {activeModalName !== 'delete' && activeModalName !== 'search' && bodies[`${activeModalName}_${getSingularTabName(activeTable)}`]}
                </div>

                <div className='modal-footer'>
                    <button type='button' className='btn confirm-btn' onClick={() => console.log(data)}>Log modalData</button>
                    <button type='submit' className='btn confirm-btn'>{texts[activeModalName].confirm}</button>
                    <button type='button' className='btn abort-btn' onClick={exitModal}>{texts[activeModalName].abort}</button>
                </div>

            </div>
        </form>
    );
}
