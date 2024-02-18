import React from 'react';

export default function MatchesPlayed({ matchesPlayed }) {
    return (
        <>
            <h2 className="totalMatches">
                Matches Played: <span>{matchesPlayed.played.total}</span>
            </h2>
            <p className="wins">Wins: {matchesPlayed.wins.total}</p>
            <p className="loses">Loses: {matchesPlayed.loses.total}</p>
            <p className="draws">Draws: {matchesPlayed.draws.total}</p>
        </>
    );
}
