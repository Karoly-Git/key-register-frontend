import React, { useState } from 'react';
import { RiFunctionLine as DotsIcon } from "react-icons/ri";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { BsPlusLg as PlusIcon } from "react-icons/bs";

export default function HeadBar() {
    const [isBodyOn, setIsBodyOn] = useState(false);

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className='icon-bar icon-bar-add' onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <SearchIcon className='icon' onClick={toggleBody} />
                <PlusIcon className='icon' onClick={toggleBody} />
            </div>
            <div className='bar-tail'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
        </div>
    );
}