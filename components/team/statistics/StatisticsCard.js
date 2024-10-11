import React from 'react';
import { totalCards } from '@/utils/utils';

export default function StatisticsCard({ title, data }) {
    const renderStatistics = () => {
        switch (title) {
            case 'Matches':
                return <p>{data.fixtures.played.total}</p>;
            case 'Wins':
                return <p>{data.fixtures.wins.total}</p>;
            case 'Draws':
                return <p>{data.fixtures.draws.total}</p>;
            case 'Loses':
                return <p>{data.fixtures.loses.total}</p>;
            case 'Goals':
                return (
                    <>
                        <p>{data.goals.for.total.total}</p>
                    </>
                );
            case 'Goals Against':
                return (
                    <>
                        <p>{data.goals.against.total.total}</p>
                    </>
                );
            case 'Clean Sheets':
                return <p>{data.clean_sheet.total}</p>;
            case 'Cards':
                return (
                    <>
                        <p className="Red_Card">
                            Red: {totalCards(data.cards.red)}
                        </p>
                        <p className="Yellow_Card">
                            Yellow: {totalCards(data.cards.yellow)}
                        </p>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <div className="Statistics-Card">
            <h2 className="Statistics-Card__Title">{title}</h2>
            <div className="Statistics-Card__Content">{renderStatistics()}</div>
        </div>
    );
}
