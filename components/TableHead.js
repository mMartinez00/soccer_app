import React from 'react';

export default function TableHead({ headers }) {
    return (
        <thead>
            {
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            }
        </thead>
    );
}
