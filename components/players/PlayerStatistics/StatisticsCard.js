import React from 'react';
import TeamsTabs from './TeamsTabs';
import StatisticsTable from './StatisticsTable';

export default function StatisticsCard({ statistics, showStats }) {
    // console.log(statistics);
    // console.log(showStats);
    const teams = Object.keys(statistics);
    return (
        <>
            <div className="Card">
                <TeamsTabs teams={teams} />
            </div>
        </>
    );
}
