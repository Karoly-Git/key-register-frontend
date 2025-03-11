// Import React hooks and Redux functions
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Redux actions
import { setActiveModalName, setModalData } from '../../redux/appSlice';

// Import icons from react-icons
import { MdEdit as EditIcon } from "react-icons/md";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
//import { RiMenuFoldFill as DotsIcon } from "react-icons/ri";
import { HiOutlineDotsVertical as DotsIcon } from "react-icons/hi";

export default function SideBar({ record }) {
    const [isBodyOn, setIsBodyOn] = useState(false); // State to track if the body is toggled on
    const dispatch = useDispatch(); // Access Redux dispatch function

    // Toggle visibility of the body
    const toggleBody = () => {
        setIsBodyOn(prevState => !prevState);
    };

    // Handle the edit button click
    const handleEditClick = () => {
        setIsBodyOn(false); // Close the body when editing
        dispatch(setActiveModalName('edit')); // Set the active modal to 'edit'
        dispatch(setModalData(record)); // Set the modal data to the current record
        console.log(record);
    };

    // Handle the delete button click
    const handleDeleteClick = () => {
        setIsBodyOn(false); // Close the body when deleting
        dispatch(setActiveModalName('delete')); // Set the active modal to 'delete'
        dispatch(setModalData(record)); // Set the modal data to the current record
    };

    // Handle mouse leave event to close the body
    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    return (
        <div className="icon-bar icon-bar-edit" onMouseLeave={handleMouseLeave}>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <EditIcon className="icon edit-icon" onClick={handleEditClick} />
                <DeleteIcon className="icon delete-icon" onClick={handleDeleteClick} />
            </div>
            <div className="bar-tail">
                <DotsIcon className="icon dots-icon" onClick={toggleBody} />
            </div>
        </div>
    );
}

