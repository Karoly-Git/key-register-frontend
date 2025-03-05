// Import React hooks and Redux functions
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Redux action
import { setTableSorting } from '../../redux/appSlice';

// Import icons from react-icons
import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon, ImSortAlphaDesc as DescIcon } from "react-icons/im";
import { FaArrowDownShortWide as AscIndiIcon, FaArrowDownWideShort as DescIndiIcon } from "react-icons/fa6";

export default function FilterBar({ tabName, colName }) {
    const dispatch = useDispatch();

    const [isBodyOn, setIsBodyOn] = useState(false);
    const [isSorted, setIsSorted] = useState(null);

    // Retrieve sorting state from Redux store
    const sortBy = useSelector(state => state.app.tableStates[tabName]).sortBy;
    const isAsc = useSelector(state => state.app.tableStates[tabName]).isAsc;

    // Update sorting state when `sortBy` or `colName` changes
    useEffect(() => {
        const newIsSorted = sortBy === (colName === 'Hook' ? 'hook_number' : `${colName}_name`).toLowerCase();
        setIsSorted(newIsSorted);
    }, [sortBy, colName]);

    // Toggle the body visibility
    const toggleBody = () => {
        setIsBodyOn(prevState => !prevState);
    };

    // Handle mouse leave event to close the body
    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    // Handle sorting logic (ascending/descending)
    const handleSort = (isAscending) => {
        const sortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;
        dispatch(setTableSorting({ tableName: tabName, sortBy, isAsc: isAscending }));
        toggleBody();
    };

    return (
        <div className="icon-bar icon-bar-filter" onMouseLeave={handleMouseLeave}>
            <div className="bar-head">
                {/* Toggle the filter options body visibility */}
                <DotsIcon className="icon dots-icon" onClick={toggleBody} />

                {/* Show sorting indicator if the column is sorted */}
                {isSorted ? (isAsc ? <AscIndiIcon className="indicator-icon" /> : <DescIndiIcon className="indicator-icon" />) : null}
            </div>

            {/* Filter options body with sort ascending/descending options */}
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <AscIcon className="icon" onClick={() => handleSort(true)} />
                <DescIcon className="icon" onClick={() => handleSort(false)} />
            </div>
        </div>
    );
}
