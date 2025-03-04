import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTableSorting } from '../../redux/sortingData';

import { IoCaretDownOutline as DotsIcon } from "react-icons/io5";
import { ImSortAlphaAsc as AscIcon } from "react-icons/im";
import { ImSortAlphaDesc as DescIcon } from "react-icons/im";
import { FaArrowDownShortWide as AscIndiIcon } from "react-icons/fa6";
import { FaArrowDownWideShort as DescIndiIcon } from "react-icons/fa6";
export default function FilterBar({ tabName, colName }) {
    const [isBodyOn, setIsBodyOn] = useState(false);
    const [isSorted, setIsSorted] = useState(null);
    const dispatch = useDispatch();

    const sortByFromStore = useSelector(state => state.sortingData.tableStates[tabName]).sortBy;
    const isAscFromStore = useSelector(state => state.sortingData.tableStates[tabName]).isAsc;

    useEffect(() => {
        const newIsSorted = sortByFromStore === (colName === 'Hook' ? 'hook_number' : `${colName}_name`).toLowerCase();
        setIsSorted(newIsSorted);
    }, [sortByFromStore, colName]);


    const toggleBody = () => {
        setIsBodyOn(!isBodyOn);
    };

    const handleMouseLeave = () => {
        setIsBodyOn(false);
    };

    const handleSort = (isAscending) => {
        const sortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;
        dispatch(setTableSorting({ tableName: tabName, sortBy, isAsc: isAscending }));
        toggleBody();
    };

    return (
        <div className='icon-bar icon-bar-filter' onMouseLeave={handleMouseLeave}>
            <div className='bar-head'>
                <DotsIcon className='icon dots-icon' onClick={toggleBody} />
                {isSorted ? isAscFromStore ? <AscIndiIcon className='indicator-icon' /> : <DescIndiIcon className='indicator-icon' /> : undefined}

            </div>
            <div className={isBodyOn ? 'bar-body body-on' : 'bar-body'}>
                <AscIcon className='icon' onClick={() => handleSort(true)} />
                <DescIcon className='icon' onClick={() => handleSort(false)} />
            </div>
        </div>
    );
}
