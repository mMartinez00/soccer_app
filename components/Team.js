import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Team({ team, leagueId, season }) {
    return (
        <>
            <Link
                href={{
                    pathname: `/team/${team.name}`,
                    query: {
                        teamId: `${team.id}`,
                        leagueId: `${leagueId}`,
                        season: `${season}`,
                    },
                }}
            >
                <span className="Team">
                    <Image
                        src={team && team.logo}
                        width={25}
                        height={25}
                        alt="logo"
                    />{' '}
                    {team.name}
                </span>
            </Link>
        </>
    );
}
