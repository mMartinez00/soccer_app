import React from 'react'

export default function MatchesPlayed({ matchesPlayed }) {
    return (
        <>
            <p className="totalMatches">
                Matches Played: <span>{matchesPlayed.played.total}</span>
            </p>
            <p className="wins">Wins: {matchesPlayed.wins.total}</p>
            <p className="loses">Loses: {matchesPlayed.loses.total}</p>
            <p className="draws">Draws: {matchesPlayed.draws.total}</p>
        </>
    )
}
