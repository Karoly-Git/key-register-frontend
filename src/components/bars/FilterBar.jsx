import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTableSorting } from '../../redux/sortingData';

import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon } from "react-icons/im";
import { ImSortAlphaDesc as DescIcon } from "react-icons/im";

export default function FilterBar({ label, colName }) {
    const [isBodyOn, setIsBodyOn] = useState(false);
    const dispatch = useDispatch();

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    const handleSort = (isAscending) => {
        const sortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;
        dispatch(setTableSorting({ tableName: label, sortBy, isAsc: isAscending }));
        // console.log({ tableName: label, sortBy, isAsc: isAscending });
        toggleBody();
    };

    return (
        <div className='icon-bar icon-bar-filter' onMouseLeave={handleMouseLeave}>
            <div className='bar-head'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <AscIcon className='icon' onClick={() => handleSort(true)} />
                <DescIcon className='icon' onClick={() => handleSort(false)} />
            </div>
        </div>
    );
}
