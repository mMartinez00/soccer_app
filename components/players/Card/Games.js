import React from 'react';

export default function Games({ games }) {
    return (
        <>
            <div className="Games">
                <p className="Appearences">Appearences: {games.appearences}</p>
                <p className="Minutes">Minutes: {games.minutes}</p>
                <p className="lineups">Lineups: {games.lineups}</p>
                <p className="Rating">
                    Rating:{' '}
                    {games.rating && parseFloat(games.rating).toFixed(2)}
                </p>
            </div>
        </>
    );
}
