import { useState } from 'react';
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { RiMenuFoldFill as DotsIcon } from "react-icons/ri";

export default function SideBar() {
    const [isBodyOn, setIsBodyOn] = useState(false);

    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className='icon-bar icon-bar-edit' onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <DeleteIcon className='icon delete-icon' onClick={toggleBody} />
            </div>
            <div className='bar-tail'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
            </div>
        </div>
    );
}