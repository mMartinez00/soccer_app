import React from 'react';
import Competition from './Competition';

export default function MatchList({ matches }) {
    return (
        <section className="Matches__List">
            {matches &&
                Object.entries(matches).map(([league, matches]) => (
                    <Competition
                        key={league}
                        league={matches[0].league}
                        matches={matches}
                    />
                ))}
        </section>
    );
}
