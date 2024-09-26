import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Match({ matches }) {
    // console.log(matches);
    return (
        <div className="League_Matches">
            {matches &&
                matches.map((match, index) => {
                    return (
                        <div
                            className={`Match_Row ${index + 1}`}
                            key={match.fixture.id}
                        >
                            <div className="Match">
                                <p className="Match_Time">
                                    {match.fixture.status.long}{' '}
                                    {match.fixture.status.elapsed}
                                    {"'"}
                                </p>
                                <p className="Home_Team">
                                    <Link
                                        className="Link_Team"
                                        href={{
                                            pathname: `/team/${match.teams.home.name}`,
                                            query: {
                                                teamID: `${match.teams.home.id}`,
                                                leagueID: `${match.league.id}`,
                                                season: `${match.league.season}`,
                                            },
                                        }}
                                    >
                                        <span className="Team">
                                            {match.teams.home.name}
                                            <Image
                                                src={match.teams.home.logo}
                                                width={50}
                                                height={50}
                                                alt="logo"
                                                className="Home_Team_Logo"
                                            />{' '}
                                        </span>
                                    </Link>
                                </p>
                                <p className="Match_Score">
                                    {match.goals.home} - {match.goals.away}
                                </p>
                                <p className="Away_Team">
                                    <Link
                                        className="Link_Team"
                                        href={{
                                            pathname: `/team/${match.teams.away.name}`,
                                            query: {
                                                teamID: `${match.teams.away.id}`,
                                                leagueID: `${match.league.id}`,
                                                season: `${match.league.season}`,
                                            },
                                        }}
                                    >
                                        <span className="Team">
                                            {match.teams.away.name}
                                            <Image
                                                src={match.teams.away.logo}
                                                width={50}
                                                height={50}
                                                alt="logo"
                                                className="Away_Team_Logo"
                                            />{' '}
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
