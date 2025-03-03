import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setIsAscending } from '../../redux/sortingData';

import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon } from "react-icons/im";
import { ImSortAlphaDesc as DescIcon } from "react-icons/im";

export default function FilterBar({ colName }) {
    const [isBodyOn, setIsBodyOn] = useState(false);
    const dispatch = useDispatch();

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    const handleAscClick = () => {
        //console.log('handleAscClick', colName);
        const sortBy = colName === 'Hook' ? colName.toLowerCase() + '_number' : colName.toLowerCase() + '_name';
        dispatch(setSortBy(sortBy));
        dispatch(setIsAscending(true));
        toggleBody();
    };

    const handleDescClick = () => {
        const sortBy = colName === 'Hook' ? colName.toLowerCase() + '_number' : colName.toLowerCase() + '_name';
        dispatch(setSortBy(sortBy));
        dispatch(setIsAscending(false));
        toggleBody();
    };

    return (
        <div className='icon-bar icon-bar-filter' onMouseLeave={handleMouseLeave}>
            <div className='bar-head'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <AscIcon className='icon' onClick={handleAscClick} />
                <DescIcon className='icon' onClick={handleDescClick} />
            </div>
        </div>
    );
}
