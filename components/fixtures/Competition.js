import React from 'react';
import LeagueHeader from './LeagueHeader';
import Match from './Match';

export default function Competition({ league, matches }) {
    return (
        <div className="Competition">
            <LeagueHeader league={league} />
            <Match matches={matches} />
        </div>
    );
}
