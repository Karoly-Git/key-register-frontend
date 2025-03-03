import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAscending, setTablesSortedBy } from '../../redux/sortingData';

import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon } from "react-icons/im";
import { ImSortAlphaDesc as DescIcon } from "react-icons/im";

export default function FilterBar({ label, colName }) {
    const [isBodyOn, setIsBodyOn] = useState(false);
    const tablesSortedBy = useSelector(state => state.sortingData.tablesSortedBy);

    const dispatch = useDispatch();

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    const handleAscClick = () => {
        const sortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;

        dispatch(setTablesSortedBy({ ...tablesSortedBy, [label]: sortBy }));
        dispatch(setIsAscending(true));
        toggleBody();
    };

    const handleDescClick = () => {
        const sortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;

        dispatch(setTablesSortedBy({ ...tablesSortedBy, [label]: sortBy }));
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