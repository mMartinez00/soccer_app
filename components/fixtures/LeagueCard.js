import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Match from './Match';

export default function Competition({ league, matches, myRef }) {
    // if the flag or logo property is null refer to: https://github.com/vercel/next.js/discussions/29545

    return (
        <div className="LeagueCard" ref={myRef}>
            <div className="LeagueCard__Header">
                <Link
                    className="LeagueCard__Header-Link"
                    href={{
                        pathname: `/standings/${league.name}`,
                        query: {
                            leagueID: `${league.id}`,
                            season: `${league.season}`,
                        },
                    }}
                >
                    <h1 className="LeagueCard__Header-Title">
                        <span className="LeagueCard__Country">
                            {league.flag && (
                                <Image
                                    src={league.flag}
                                    width={25}
                                    height={25}
                                    className="LeagueCard__Country-Flag"
                                    alt={`${league.country} flag`}
                                />
                            )}{' '}
                            {league.country}
                        </span>
                        {' - '}
                        <span className="LeagueCard__League-Details">
                            <Image
                                src={league.logo}
                                width={25}
                                height={25}
                                className="LeagueCard__Logo"
                                alt={`${league.name} logo`}
                            />{' '}
                            {league.name}
                        </span>
                    </h1>
                </Link>
            </div>

            <div className="LeagueCard__Matches">
                {matches.map((match) => {
                    return <Match key={match.fixture.id} match={match} />;
                })}
            </div>
        </div>
    );
}
