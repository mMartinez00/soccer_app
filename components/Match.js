import React from 'react';
import Link from 'next/link';
import Team from './Team';
import Score from './Score';
import Time from './Time';
import styles from '../styles/Match.module.css';

export default function Match({ matches }) {
    return (
        <div className={styles.Matches}>
            {matches &&
                matches.map((match) => {
                    return (
                        <div className={styles.Match} key={match.fixture.id}>
                            <Time time={match.fixture.status} />
                            <Link
                                href={{
                                    pathname: `/team/${match.teams.home.name}`,
                                    query: {
                                        teamId: `${match.teams.home.id}`,
                                        leagueId: `${match.league.id}`,
                                        season: `${match.league.season}`,
                                    },
                                }}
                            >
                                <Team team={match.teams.home} />
                            </Link>
                            <Score score={match.score} />
                            <Link
                                href={{
                                    pathname: `/team/${match.teams.away.name}`,
                                    query: {
                                        teamId: `${match.teams.away.id}`,
                                        leagueId: `${match.league.id}`,
                                        season: `${match.league.season}`,
                                    },
                                }}
                            >
                                <Team team={match.teams.away} />
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}
