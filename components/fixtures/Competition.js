import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Match from './Match';

export default function Competition({ league, matches }) {
    // if the flag or logo property is null refer to: https://github.com/vercel/next.js/discussions/29545

    return (
        <div className="Competition">
            <div className="Competition_League">
                <Link
                    className="Comepetition_Link"
                    href={{
                        pathname: `/standings/${league.name}`,
                        query: {
                            leagueID: `${league.id}`,
                            season: `${league.season}`,
                        },
                    }}
                >
                    <h1 className="Competitiom_League-Name">
                        <span className="Country">
                            {league.flag && (
                                <Image
                                    src={league.flag}
                                    width={25}
                                    height={25}
                                    alt="competition_country-flag"
                                />
                            )}{' '}
                            {league.country}
                        </span>
                        {' - '}
                        <span className="Competition_League-Logo-Name">
                            <Image
                                src={league.logo}
                                width={25}
                                height={25}
                                alt="Competition_league-logo"
                            />{' '}
                            {league.name}
                        </span>
                    </h1>
                </Link>
            </div>

            <div className="Competition__Matches">
                <Match matches={matches} />
            </div>
        </div>
    );
}
