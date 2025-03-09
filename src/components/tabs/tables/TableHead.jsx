// Import React and custom components
import React from 'react';
import FilterBar from '../../bars/FilterBar';

export default function TableHead({ tabName, columns }) {
    return (
        <thead>
            <tr>
                {columns.map((colName, labelIndex) => (
                    <th key={labelIndex}>
                        <FilterBar tabName={tabName} colName={colName} />
                    </th>
                ))}
            </tr>
        </thead>
    );
}
