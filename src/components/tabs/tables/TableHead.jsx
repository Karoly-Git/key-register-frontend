import React from 'react';
import FilterBar from '../../bars/FilterBar';
import HeadBar from '../../bars/HeadBar';

export default function TableHead({ tabName, columns }) {
    return (
        <thead>
            {<tr>
                {columns.map((colName, labelIndex) => (
                    <th key={labelIndex}>
                        {colName} &nbsp;
                        <FilterBar tabName={tabName} colName={colName} />
                    </th>
                ))}

                <th className='th-edit'>
                    <HeadBar />
                </th>
            </tr>}
        </thead>
    )
}
