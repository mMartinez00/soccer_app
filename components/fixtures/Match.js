import React from 'react';
import Link from 'next/link';
import Team from './Team';
import Score from './Score';
import Time from './Time';

export default function Match({ matches }) {
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
                                <Time time={match.fixture.status} />
                                <Link
                                    className="Link"
                                    href={{
                                        pathname: `/team/${match.teams.home.name}`,
                                        query: {
                                            teamID: `${match.teams.home.id}`,
                                            leagueID: `${match.league.id}`,
                                            season: `${match.league.season}`,
                                        },
                                    }}
                                >
                                    <Team team={match.teams.home} />
                                </Link>
                                <Score score={match.score} />
                                <Link
                                    className="Link"
                                    href={{
                                        pathname: `/team/${match.teams.away.name}`,
                                        query: {
                                            teamID: `${match.teams.away.id}`,
                                            leagueID: `${match.league.id}`,
                                            season: `${match.league.season}`,
                                        },
                                    }}
                                >
                                    <Team team={match.teams.away} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
