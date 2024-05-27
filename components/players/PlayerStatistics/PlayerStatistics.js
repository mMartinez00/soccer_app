import React, { useState } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';

export default function PlayerStatistics({ statistics }) {
    const [playersStatistics, setPlayersStatistics] = useState('General');

    const handleCLick = (e) => {
        setPlayersStatistics(e.target.innerText);
    };

    const groupedByTeam = statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);
        return a;
    }, {});

    const data = Object.values(groupedByTeam);
    const keys = Object.keys(groupedByTeam);
    // console.log(keys);
    // console.log(data);

    return (
        <>
            <div className="Statistics">
                <TeamsTabs teams={Object.keys(groupedByTeam)} />
                <StatButtons handleClick={handleCLick} />
                {data.map((a, index) => {
                    // console.log(a);
                    return (
                        <StatisticsTable
                            key={index}
                            statistics={a}
                            tableHeaders={playersStatistics}
                        />
                    );
                })}
            </div>
        </>
    );
}
