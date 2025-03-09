import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTableSorting } from '../../redux/appSlice';

import { FaArrowDownShortWide as AscIndiIcon, FaArrowDownWideShort as DescIndiIcon } from "react-icons/fa6";

export default function FilterBar({ tabName, colName }) {
    const dispatch = useDispatch();

    const [isSorted, setIsSorted] = useState(false);

    const sortBy = useSelector(state => state.app.tableStates[tabName]).sortBy;
    const isAsc = useSelector(state => state.app.tableStates[tabName]).isAsc;

    useEffect(() => {
        const newIsSorted = sortBy === (colName === 'Hook' ? 'hook_number' : `${colName}_name`).toLowerCase();
        setIsSorted(newIsSorted);
    }, [sortBy, colName]);

    const handleSort = () => {
        const newSortBy = colName === 'Hook' ? 'hook_number' : `${colName.toLowerCase()}_name`;
        const newIsAsc = sortBy === newSortBy ? !isAsc : true;
        dispatch(setTableSorting({ tableName: tabName, sortBy: newSortBy, isAsc: newIsAsc }));
    };


    return (
        <div className="icon-bar icon-bar-filter">
            <div className="bar-head">
                <h4 onClick={handleSort}>{colName}</h4>
                {isSorted ? (isAsc ? <AscIndiIcon className="indicator-icon" /> : <DescIndiIcon className="indicator-icon" />) : null}
            </div>
        </div>
    );
}
