import { useState, useEffect } from 'react';
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

export default function Modal({ modalName, modalBody }) {
    const [isModalOn, setIsModalOn] = useState(false);
    const activeTab = 'keys';   // will come from Store

    const btnTexts = {
        add: {
            confirm: 'Save',    // was save
            abort: 'Cancel'     // was cancel
        },
        delete: {
            confirm: 'Yes',
            abort: 'Cancel'
        },
        edit: {
            confirm: 'Update',
            abort: 'Cancel'
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const toggleModal = () => {
        setIsModalOn(!isModalOn);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            setIsModalOn(false);
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
                    <h2>{modalName} <span className='tab-name'>{activeTab}</span>?</h2>
                    <CloseIcon className='icon' onClick={toggleModal} />
                </div>

                <div className='modal-body'>
                    {modalBody}
                </div>

                <div className='modal-footer'>
                    <button type='submit' className='btn confirm-btn'>{btnTexts[modalName].confirm}</button>
                    <button type='button' className='btn abort-btn' onClick={toggleModal}>{btnTexts[modalName].abort}</button>
                </div>
            </div>
        </form>
    );
}
