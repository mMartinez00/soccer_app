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
                )}
                <h4 className="Match__Team-Name">{team.name}</h4>
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

    const renderTime = (time) => {
        const status = time.status;
        const date = time.date;

        if (status.long === 'Not Started') {
            return (
                <time dateTime={date} className="Match__Time">
                    {date.split('T')[1].split(':00+')[0]}
                </time>
            );
        }

        if (status.long === 'First Half' || status.long === 'Second Half') {
            return <span className="Match__Time">{status.elapsed}'</span>;
        }

        return <span className="Match__Time">{status.short}</span>;
    };

    return (
        <div className="Match__Container">
            <div className="Match__Row">
                {renderTime(fixture)}
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
