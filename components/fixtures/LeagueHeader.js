import React from 'react';
import Country from './Country';
import League from './League';
import Link from 'next/link';

export default function LeagueHeader({ league }) {
    // if the flag & logo property does not have a value refer to: https://github.com/vercel/next.js/discussions/29545
    console.log(league);

    return (
        <>
            <Link
                href={{
                    pathname: `/standings/${league.name}`,
                    query: {
                        leagueId: `${league.id}`,
                        season: `${league.season}`,
                    },
                }}
            >
                <Country country={league.country} flag={league.flag} /> -
                <League name={league.name} logo={league.logo} />
            </Link>
        </>
    );
}
