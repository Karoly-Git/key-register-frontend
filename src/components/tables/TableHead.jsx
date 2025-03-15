// Import React and custom components
import React from 'react';
import FilterBar from '../bars/FilterBar';

export default function TableHead({ tableName, columns }) {
    return (
        <thead>
            <tr>
                {columns.map((colName, labelIndex) => (
                    <th key={labelIndex} className={`col-${labelIndex}`}>
                        <FilterBar tableName={tableName} colName={colName} />
                    </th>
                ))}
            </tr>
        </thead>
    );
}
