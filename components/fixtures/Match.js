import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Match({ match }) {
    return (
        <div className="Match__Container">
            <div className="Match__Row">
                <p className="Match__Time">
                    {match.fixture.status.long}{' '}
                    {match.fixture.status.elapsed !== null
                        ? match.fixture.status.elapsed + "'"
                        : ''}
                </p>
                <div className="Match">
                    <p className="Match__Team Match__Team--Home">
                        <Link
                            className="Match__Team--Link"
                            href={{
                                pathname: `/team/${match.teams.home.name}`,
                                query: {
                                    teamID: `${match.teams.home.id}`,
                                    leagueID: `${match.league.id}`,
                                    season: `${match.league.season}`,
                                },
                            }}
                        >
                            <span className="Match__Team-Name">
                                {match.teams.home.name}
                                <Image
                                    src={match.teams.home.logo}
                                    width={25}
                                    height={25}
                                    alt="logo"
                                    className="Match__Team-Logo Match__Team-Logo--Home"
                                />{' '}
                            </span>
                        </Link>
                    </p>
                    <p className="Match__Score">
                        {match.goals.home} - {match.goals.away}
                    </p>
                    <p className="Match__Team Match__Team--Away">
                        <Link
                            className="Match__Team--Link"
                            href={{
                                pathname: `/team/${match.teams.away.name}`,
                                query: {
                                    teamID: `${match.teams.away.id}`,
                                    leagueID: `${match.league.id}`,
                                    season: `${match.league.season}`,
                                },
                            }}
                        >
                            <span className="Match__Team-Name">
                                <Image
                                    src={match.teams.away.logo}
                                    width={25}
                                    height={25}
                                    alt="logo"
                                    className="Match__Team-Logo Match__Team-Logo--Away"
                                />{' '}
                                {match.teams.away.name}
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
