import React from 'react';
import { totalCards } from '@/utils/utils';

export default function StatisticsCard({ title, data }) {
    const renderStatistics = () => {
        switch (title) {
            case 'Matches':
                return (
                    <p style={{ display: 'inline-block' }}>
                        {data.fixtures.played.total}
                    </p>
                );
            case 'Wins':
                return (
                    <p style={{ display: 'inline-block' }}>
                        {data.fixtures.wins.total}
                    </p>
                );
            case 'Draws':
                return (
                    <p style={{ display: 'inline-block' }}>
                        {data.fixtures.draws.total}
                    </p>
                );
            case 'Loses':
                return (
                    <p style={{ display: 'inline-block' }}>
                        {data.fixtures.loses.total}
                    </p>
                );
            case 'Goals':
                return (
                    <>
                        <p style={{ display: 'inline-block' }}>
                            {data.goals.for.total.total}
                        </p>
                    </>
                );
            case 'Goals Against':
                return (
                    <>
                        <p style={{ display: 'inline-block' }}>
                            {data.goals.against.total.total}
                        </p>
                    </>
                );
            case 'Clean Sheets':
                return (
                    <p style={{ display: 'inline-block' }}>
                        {data.clean_sheet.total}
                    </p>
                );
            case 'Cards':
                return (
                    <>
                        <p
                            className="Red_Card"
                            style={{ display: 'inline-block' }}
                        >
                            Red: {totalCards(data.cards.red)}
                        </p>
                        <p
                            className="Yellow_Card"
                            style={{ display: 'inline-block' }}
                        >
                            Yellow: {totalCards(data.cards.yellow)}
                        </p>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <div className="Card">
            <h2 className="Card_Title">{title}</h2>
            <div className="Top_Statistics">{renderStatistics()}</div>
        </div>
    );
}
