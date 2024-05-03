import React, { useState } from 'react';
// import StatisticsTable from './StatisticsTable';
import StatisticsCard from './StatisticsCard';
import StatButtons from './StatButtons';

export default function PlayerStatistics({ statistics }) {
    const [stats, setStats] = useState('General');
    const an = statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);

        return a;
    }, {});

    // console.log(an);
    // console.log(statistics);
    // console.log(Object.keys(an));
    // console.log(stats);

    return (
        <>
            <div className="Statistics">
                <StatButtons stats={stats} />
                <StatisticsCard statistics={an} showStats={stats} />
                {/* <StatisticsTable statistics={statistics} stats={stats} /> */}
            </div>
        </>
    );
}
