import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { setActiveModalName } from '../../redux/appSlice';
import { BsSearch as SearchIcon, BsPlusLg as PlusIcon } from "react-icons/bs";

export default function SearchBar() {
    const dispatch = useDispatch();

    const inpRef = useRef(null);

    const handleSearchIconClick = () => {
        if (inpRef.current) {
            inpRef.current.focus();
        }
    };

    const handleAddIconClick = () => {
        dispatch(setActiveModalName('add'));
    };


    return (
        <div className="search-bar">
            <div>
                <SearchIcon className='icon search-icon' onClick={handleSearchIconClick} />
                <input type="text" ref={inpRef} />
                <PlusIcon className='icon add-icon' onClick={handleAddIconClick} />
            </div>
        </div>
    );
}
