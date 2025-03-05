// Import React and custom components
import React from 'react';
import FilterBar from '../../bars/FilterBar';
import HeadBar from '../../bars/HeadBar';

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

                {/* Render HeadBar in the last table header */}
                <th className="th-edit">
                    <HeadBar />
                </th>
            </tr>
        </thead>
    );
}
