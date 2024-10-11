import React from 'react';
import StatisticsCard from './StatisticsCard';

export default function TeamStatisticsList({ statistics }) {
    const cards_data = [
        'Matches',
        'Wins',
        'Draws',
        'Loses',
        'Goals',
        'Goals Against',
        'Clean Sheets',
        'Cards',
    ];

    return (
        <ul className="Statistics__List">
            {cards_data.map((card) => {
                return (
                    <li key={card} className="List__Item">
                        <StatisticsCard
                            key={card}
                            title={card}
                            data={statistics}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
