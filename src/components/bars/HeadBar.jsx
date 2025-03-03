import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setActiveModal } from '../../redux/activeModal';

import { RiFunctionLine as DotsIcon } from "react-icons/ri";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { BsPlusLg as PlusIcon } from "react-icons/bs";

export default function HeadBar({ label, colName }) {

    const [isBodyOn, setIsBodyOn] = useState(false);
    const dispatch = useDispatch();

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleAddClick = () => {
        setIsBodyOn(!isBodyOn);
        dispatch(setActiveModal('add'));
    };

    const handleSearchClick = () => {
        setIsBodyOn(!isBodyOn);
        dispatch(setActiveModal('search'));
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className='icon-bar icon-bar-add' onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <SearchIcon className='icon' onClick={handleSearchClick} />
                <PlusIcon className='icon' onClick={handleAddClick} />
            </div>
            <div className='bar-tail'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
        </div>
    );
}