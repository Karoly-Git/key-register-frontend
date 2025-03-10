import React from 'react';
import { Link } from 'react-router-dom';
import { tables } from '../../../app.config';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTableName } from '../../redux/appSlice';

export default function TableNav() {
    const dispatch = useDispatch();
    const activeTableName = useSelector(state => state.app.activeTable.name);

    const handleClick = (name) => () => {
        dispatch(setActiveTableName(name));
    };


    return (
        <nav className='table-nav'>
            <ul>
                {tables.map(({ name, icon: Icon }) => (
                    <li key={name}>
                        <Link
                            to={`/key-register/${name}`}
                            onClick={handleClick(name)}
                            className={activeTableName === name ? 'table-btn active-table-btn' : 'table-btn'}
                        >
                            {Icon && <Icon className='icon' />}
                            <span className='tab-name'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
