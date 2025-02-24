import React, { useState, useContext } from 'react';
import { MdEdit as EditIcon } from "react-icons/md";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { RiMenuFoldFill as DotsIcon } from "react-icons/ri";

import { KeyRegisterContext } from '../KeyRegister';
import { GlobalContext } from '../../../App';

export default function SideBar({ id }) {
    const { toggleModal, setTargetId } = useContext(KeyRegisterContext);
    const { userLoggedIn } = useContext(GlobalContext);
    const [isBodyOn, setIsBodyOn] = useState(false);

    const handleDotsClick = () => {
        setIsBodyOn(!isBodyOn);
        setTargetId(id);
    };

    return (
        <div className='icon-bar icon-bar-edit' onMouseLeave={() => setIsBodyOn(false)}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                {userLoggedIn && <EditIcon className='icon edit-icon' onClick={() => toggleModal('edit')} />}
                <DeleteIcon className='icon delete-icon' onClick={() => toggleModal('delete')} />
            </div>
            <div className='bar-tail'>
                <DotsIcon className='icon dots-icon' onClick={handleDotsClick} />
            </div>
        </div>
    );
}