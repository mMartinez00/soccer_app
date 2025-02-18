import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Match({ match }) {
    const { fixture, teams, league, goals } = match;

    const renderTeam = (team, type) => (
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
            <div className={`Match__Team Match__Team--${type}`}>
                {type === 'Away' && (
                    <Image
                        src={team.logo}
                        width={25}
                        height={25}
                        alt={`${team.name} logo`}
                        className={`Match__Team-Logo Match__Team-Logo--${type}`}
                    />
                )}{' '}
                <h4 className="Match__Team-Name">{team.name}</h4>{' '}
                {type === 'Home' && (
                    <Image
                        src={team.logo}
                        width={25}
                        height={25}
                        alt={`${team.name} logo`}
                        className={`Match__Team-Logo Match__Team-Logo--${type}`}
                    />
                )}
            </div>
        </Link>
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
                    <div className="Match__Score">
                        <p className="Home__Score">{goals.home}</p>
                        <p className="Divider">-</p>
                        <p className="Away__Score">{goals.away}</p>
                    </div>
                    {renderTeam(teams.away, 'Away')}
                </div>
            </div>
        </div>
    );
}
