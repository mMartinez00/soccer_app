import React from 'react';

export default function Penalties({ penalties }) {
    return (
        <>
            <h2>Penalties</h2>
            <p className="scored">
                Scored: {penalties.scored.total} <br />
                Percentage: {penalties.scored.percentage}
            </p>
            <p className="missed">
                Missed: {penalties.missed.total} <br />
                Percentage: {penalties.missed.percentage}
            </p>
        </>
    );
}
