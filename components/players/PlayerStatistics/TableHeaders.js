import React from 'react';
import tableHeaders from './table';

export default function TableHeaders({ headers }) {
    return (
        <>
            <thead>
                <tr>{headers}</tr>
            </thead>
        </>
    );
}
