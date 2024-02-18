import React from 'react';

export default function GoalsAgainst({ goalsAgainst }) {
    return (
        <>
            <h2 className="goalsAgainst">
                Goals Against: {goalsAgainst.total.total}
            </h2>
            <p className="goalsAgainstAverage">
                Average: {goalsAgainst.average.total}
            </p>
        </>
    );
}
