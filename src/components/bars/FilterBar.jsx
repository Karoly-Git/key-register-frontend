import React, { useState } from 'react';

import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon } from "react-icons/im";
import { ImSortAlphaDesc as DescIcon } from "react-icons/im";
import { MdOutlineFilterAltOff as FilterOffIcon } from "react-icons/md";

export default function FilterBar({ sortData, setData, data, sortBy }) {
    const [isBodyOn, setIsBodyOn] = useState(false);

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className='icon-bar icon-bar-filter' onMouseLeave={handleMouseLeave}>
            <div className='bar-head'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <AscIcon className='icon' onClick={toggleBody} />
                <DescIcon className='icon' onClick={toggleBody} />
                <FilterOffIcon className='icon' onClick={toggleBody} />
            </div>
        </div>
    )
}
