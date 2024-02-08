import React from 'react'

export default function GoalsAgainst({ goalsAgainst }) {
    return (
        <>
            <p className="goalsAgainst">
                Goals Against: {goalsAgainst.total.total}
            </p>
            <p className="goalsAgainstAverage">
                Average: {goalsAgainst.average.total}
            </p>
        </>
    )
}
