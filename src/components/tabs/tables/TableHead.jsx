import React from 'react';
import FilterBar from '../../bars/FilterBar';
import HeadBar from '../../bars/HeadBar';

export default function TableHead({ lable, columns }) {
    return (
        <thead>
            {<tr>
                {columns.map((colName, lableIndex) => (
                    <th key={lableIndex}>
                        {colName} &nbsp;
                        <FilterBar lable={lable} colName={colName} />
                    </th>
                ))}

                <th className='th-edit'>
                    <HeadBar />
                </th>
            </tr>}
        </thead>
    )
}
