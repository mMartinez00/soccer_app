import React from 'react';
import Team from '../../Team';
import StatisticsTable from './StatisticsTable';

export default function StatisticsCard({ stats }) {
    return (
        <>
            <div className="Card">
                <div className="TeamName">
                    <h1 className="Name">
                        <Team team={stats[1][0].team} />
                    </h1>
                </div>
                {stats[1].map((stat) => {
                    const key = `${stat.league.name} - ${stat.team.name}`;

                    return <StatisticsTable key={key} data={stat} />;
                })}
            </div>
        </>
    );
}
