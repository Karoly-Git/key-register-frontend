// Import React hooks and Redux functions
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Redux actions
import { setActiveModal } from '../../redux/appSlice';

// Import icons from react-icons
import { RiFunctionLine as DotsIcon } from "react-icons/ri";
import { BsSearch as SearchIcon, BsPlusLg as PlusIcon } from "react-icons/bs";

export default function HeadBar() {
    const dispatch = useDispatch(); // Access Redux dispatch function

    const [isBodyOn, setIsBodyOn] = useState(false); // State to manage the visibility of the body

    // Toggle the body visibility
    const toggleBody = () => {
        setIsBodyOn(prevState => !prevState);
    };

    // Handle Add button click
    const handleAddClick = () => {
        setIsBodyOn(true);
        dispatch(setActiveModal('add')); // Set the active modal to 'add'
    };

    // Handle Search button click
    const handleSearchClick = () => {
        setIsBodyOn(true);
        dispatch(setActiveModal('search')); // Set the active modal to 'search'
    };

    // Handle mouse leave event to close the body
    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className="icon-bar icon-bar-add" onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                {/* Search icon to trigger the search modal */}
                <SearchIcon className="icon" onClick={handleSearchClick} />

                {/* Plus icon to trigger the add modal */}
                <PlusIcon className="icon" onClick={handleAddClick} />
            </div>
            <div className="bar-tail">
                {/* Dots icon to toggle the body visibility */}
                <DotsIcon className="icon dots-icon" onClick={toggleBody} />
            </div>
        </div>
    );
}
