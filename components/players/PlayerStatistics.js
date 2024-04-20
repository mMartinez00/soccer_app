import React from 'react';
import Team from '../Team';
import StatisticsCard from './Card/StatisticsCard';

export default function PlayerStatistics({ statistics }) {
    const an = statistics.reduce((a, b) => {
        const team = b.team.name;
        if (!a[team]) {
            a[team] = [];
        }

        a[team].push(b);

        return a;
    }, {});

    return (
        <>
            {Object.entries(an).map((stats, index) => {
                const key = stats[0];
                return <StatisticsCard key={key} stats={stats} />;
            })}
        </>
    );
}
