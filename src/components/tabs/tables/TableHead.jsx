import React from 'react';
import FilterBar from '../../bars/FilterBar';
import HeadBar from '../../bars/HeadBar';

export default function TableHead({ columns }) {
    return (
        <thead>
            {<tr>
                {columns.map((lable, lableIndex) => (
                    <th key={lableIndex}>
                        {lable} &nbsp;
                        <FilterBar />
                    </th>
                ))}

                <th className='th-edit'>
                    <HeadBar />
                </th>
            </tr>}
        </thead>
    )
}
