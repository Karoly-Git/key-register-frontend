import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tables } from '../../../app.config';
import { useSelector } from 'react-redux';

export default function TableNav({ page }) {
    const activeTableName = useSelector(state => state.app.activeTable.name);

    return (
        <nav className='table-nav'>
            <ul>
                {tables.map(({ name, icon: Icon }) => (
                    <li key={name}>
                        <Link
                            to={`/key-register/${name}`}
                            onClick={() => setActiveMenu(name)}
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
