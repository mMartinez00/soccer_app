import React from 'react';

export default function GoalsScored({ goalsScored }) {
    return (
        <>
            <h2 className="goalsScored">Goals: {goalsScored.total.total}</h2>
            <p className="goalsScoredAverage">
                Average: {goalsScored.average.total}
            </p>
        </>
    );
}
