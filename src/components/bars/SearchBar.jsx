import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from "../../redux/appSlice";
import { setActiveModalName } from '../../redux/appSlice';
import { BsSearch as SearchIcon, BsPlusLg as PlusIcon } from "react-icons/bs";
import { TbZoomReset as FilterOffIcon } from "react-icons/tb";

export default function SearchBar() {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.app.filterValue);
    const [inpValue, setInpValue] = useState("");

    const inpRef = useRef(null);

    const makeInputFocus = () => {
        if (inpRef.current) {
            inpRef.current.focus();
        }
    };

    const handleFilterOffIconClick = () => {
        dispatch(setFilterValue(''));
        makeInputFocus();
    };

    const handleAddIconClick = () => {
        dispatch(setActiveModalName('add'));
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInpValue(value);
        const normalizedValue = value.trim().replace(/\s+/g, ' ');
        dispatch(setFilterValue(normalizedValue));
    };

    return (
        <div className="search-bar">
            <div>
                {!filterValue ? (
                    <SearchIcon className='icon search-icon' onClick={makeInputFocus} />
                ) : (
                    <FilterOffIcon className='icon search-icon filter-off-icon' onClick={handleFilterOffIconClick} />
                )}

                <input value={inpValue} type="text" ref={inpRef} onChange={handleInputChange} />
                <PlusIcon className='icon add-icon' onClick={handleAddIconClick} />
            </div>
        </div>
    );
}
