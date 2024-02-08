import React from 'react';

export default function Streaks({ cleanSheets, biggest }) {
    return (
        <>
            <div className="streaks">
                <h2>Streaks</h2>
                <p>Wins: {biggest.streak.wins}</p>
                <p>Loses: {biggest.streak.loses}</p>
                <p>Draws: {biggest.streak.draws}</p>
                <p>Clean Sheets: {cleanSheets.total}</p>
            </div>
        </>
    );
}
