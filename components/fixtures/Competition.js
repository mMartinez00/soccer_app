import React from 'react';
import LeagueHeader from './LeagueHeader';
import Match from './Match';

export default function Competition({ league, matches }) {
    return (
        <div style={{ border: '1px black solid', margin: '5px' }}>
            <LeagueHeader league={league} />
            <Match matches={matches} />
        </div>
    );
}
