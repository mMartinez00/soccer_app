import React, { forwardRef } from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

const StatisticsTable = forwardRef((props, ref) => {
    return (
        <>
            <table className="table" ref={ref}>
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
