import React from 'react';

export default function TableHead({ columns }) {
    return (
        <thead>
            {<tr>
                {columns.map((lable, lableIndex) => (
                    <th key={lableIndex}>{lable} &nbsp;</th>
                ))}

                <th className='th-edit'></th>
            </tr>}
        </thead>
    )
}
