import React, { useState } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';

export default function PlayerStatistics({ statistics }) {
    const [tableHeaders, setTableHeaders] = useState('General');

    const handleCLick = (e) => {
        setTableHeaders(e.target.innerText);
    };

    const groupedByTeam = statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);
        return a;
    }, {});

    return (
        <>
            <div className="Statistics">
                <TeamsTabs teams={Object.keys(groupedByTeam)} />
                <StatButtons handleClick={handleCLick} />
                <StatisticsTable
                    statistics={groupedByTeam}
                    tableHeaders={tableHeaders}
                />
            </div>
        </>
    );
}
