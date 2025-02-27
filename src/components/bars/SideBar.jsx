import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveModal } from '../../redux/activeModal';

import { MdEdit as EditIcon } from "react-icons/md";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { RiMenuFoldFill as DotsIcon } from "react-icons/ri";

export default function SideBar() {
    const [isBodyOn, setIsBodyOn] = useState(false);
    const dispatch = useDispatch();

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleEditClick = () => {
        setIsBodyOn(!isBodyOn);
        dispatch(setActiveModal('edit'));
    };

    const handleDeleteClick = () => {
        setIsBodyOn(!isBodyOn);
        dispatch(setActiveModal('delete'));
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    }

    return (
        <div className='icon-bar icon-bar-edit' onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <EditIcon className='icon edit-icon' onClick={handleEditClick} />
                <DeleteIcon className='icon delete-icon' onClick={handleDeleteClick} />
            </div>
            <div className='bar-tail'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
        </div>
    );
}