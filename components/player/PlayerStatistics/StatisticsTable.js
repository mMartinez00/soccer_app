import React, { forwardRef } from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

const StatisticsTable = forwardRef((props, ref) => {
    return (
        <>
            <table
                className={`table ${props.statistics[0].team.name}`}
                ref={ref}
                style={{
                    width: '100%',
                    border: 'green dotted 1px',
                    flex: '0 0 100%',
                }}
            >
                <TableHeaders headers={props.tableHeaders} />
                <TableBody
                    statistics={props.statistics}
                    typeOfData={props.tableHeaders}
                />
            </table>
        </>
    );
});

StatisticsTable.displayName = 'StatisticsTable';

export default StatisticsTable;
