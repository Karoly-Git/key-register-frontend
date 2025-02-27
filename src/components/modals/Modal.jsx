import { act, useEffect } from 'react';
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal } from '../../redux/activeModal';

export default function Modal({ modalName, modalBody }) {
    const activeTab = useSelector(state => state.activeTab.tabName);
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
                    {modalBody}
                </div>

                <div className='modal-footer'>
                    <button type='submit' className='btn confirm-btn'>{texts[modalName].confirm}</button>
                    <button type='button' className='btn abort-btn' onClick={exitModal}>{texts[modalName].abort}</button>
                </div>

            </div>
        </form>
    );
}
