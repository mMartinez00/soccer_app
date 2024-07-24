import React from 'react';
import { totalCards } from '@/utils/utils';

export default function StatisticsCard({ title, data }) {
    const renderStatistics = () => {
        switch (title) {
            case 'Matches':
                return (
                    <span style={{ display: 'inline-block' }}>
                        {data.fixtures.played.total}
                    </span>
                );
            case 'Wins':
                return (
                    <span style={{ display: 'inline-block' }}>
                        {data.fixtures.wins.total}
                    </span>
                );
            case 'Draws':
                return (
                    <span style={{ display: 'inline-block' }}>
                        {data.fixtures.draws.total}
                    </span>
                );
            case 'Loses':
                return (
                    <span style={{ display: 'inline-block' }}>
                        {data.fixtures.loses.total}
                    </span>
                );
            case 'Goals':
                return (
                    <>
                        <span style={{ display: 'inline-block' }}>
                            {data.goals.for.total.total}
                        </span>{' '}
                        <br />
                        {/* <span style={{ display: 'inline-block' }}>
                            Average {data.goals.for.average.total}
                        </span> */}
                    </>
                );
            case 'Goals Against':
                return (
                    <>
                        <span style={{ display: 'inline-block' }}>
                            {data.goals.against.total.total}
                        </span>{' '}
                        {/* <br />
                        <span style={{ display: 'inline-block' }}>
                            Average {data.goals.against.average.total}
                        </span> */}
                    </>
                );
            case 'Clean Sheets':
                return (
                    <span style={{ display: 'inline-block' }}>
                        {data.clean_sheet.total}
                    </span>
                );
            case 'Cards':
                return (
                    <>
                        <span style={{ display: 'inline-block' }}>
                            Red: {totalCards(data.cards.red)}
                        </span>{' '}
                        <br />
                        <span style={{ display: 'inline-block' }}>
                            Yellow: {totalCards(data.cards.yellow)}
                        </span>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <div className="Card" style={{ border: 'red 1px solid' }}>
            <h2>{title}</h2>
            <div className="Top_Statistics">{renderStatistics()}</div>
        </div>
    );
}
