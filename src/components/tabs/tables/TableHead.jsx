// Import React and custom components
import React from 'react';
import FilterBar from '../../bars/FilterBar';

export default function TableHead({ tabName, columns }) {
    return (
        <thead>
            <tr>
                {/* Map through columns to create table headers */}
                {columns.map((colName, labelIndex) => (
                    <th key={labelIndex}>
                        {colName} &nbsp;
                        {/* Render FilterBar for each column */}
                        <FilterBar tabName={tabName} colName={colName} />
                    </th>
                ))}
            </tr>
        </thead>
    );
}
