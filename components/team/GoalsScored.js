import React from 'react'

export default function GoalsScored({ goalsScored }) {
    return (
        <>
            <p className="goalsScored">Goals: {goalsScored.total.total}</p>
            <p className="goalsScoredAverage">
                Average: {goalsScored.average.total}
            </p>
        </>
    )
}
