import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export default function StatisticsTable(props, index) {
    console.log(props);
    // console.log(ref);
    // const a = groupedByTeam(props.statistics);
    // console.log(a);
    return (
        <>
            <table
                className={`Table-${props.data.index} ${props.data.tableRows[0].team.name}`}
            >
                <TableHeaders headers={props.tableHeaders} />
                <TableBody
                    rows={props.data.tableRows}
                    typeOfData={props.tableHeaders}
                />
            </table>
        </>
    );
}
