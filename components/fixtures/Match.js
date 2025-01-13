import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Match({ match }) {
    const { fixture, teams, league, goals } = match;

    const renderTeam = (team, type) => (
        <p className={`Match__Team Match__Team--${type}`}>
            <Link
                className="Match__Team--Link"
                href={{
                    pathname: `/team/${team.name}`,
                    query: {
                        teamID: `${team.id}`,
                        leagueID: `${league.id}`,
                        season: `${league.season}`,
                    },
                }}
            >
                <span className="Match__Team-Name">
                    {type === 'Away' && (
                        <Image
                            src={team.logo}
                            width={25}
                            height={25}
                            alt={`${team.name} logo`}
                            className={`Match__Team-Logo Match__Team-Logo--${type}`}
                        />
                    )}
                    {team.name}
                    {type === 'Home' && (
                        <Image
                            src={team.logo}
                            width={25}
                            height={25}
                            alt="logo"
                            className={`Match__Team-Logo Match__Team-Logo--${type}`}
                        />
                    )}
                </span>
            </Link>
        </p>
    );

    return (
        <div className="Match__Container">
            <div className="Match__Row">
                <p className="Match__Time">
                    {fixture.status.long}{' '}
                    {fixture.status.elapsed !== null
                        ? fixture.status.elapsed + "'"
                        : ''}
                </p>
                <div className="Match">
                    {renderTeam(teams.home, 'Home')}
                    <p className="Match__Score">
                        {goals.home} - {goals.away}
                    </p>
                    {renderTeam(teams.away, 'Away')}
                </div>
            </div>
        </div>
    );
}
