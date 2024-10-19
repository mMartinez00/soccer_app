import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';

export default function TableRow({ team }) {
    const router = useRouter();
    const { query } = router;

    return (
        <tr>
            <td className="Standings-Table__Cell Standings-Table__Cell--Rank">
                {team.rank}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Team">
                {team.team.id ? (
                    <Link
                        href={{
                            pathname: `/team/${team.team.name}`,
                            query: {
                                teamID: `${team.team.id}`,
                                leagueID: `${query.leagueID}`,
                                season: `${query.season}`,
                            },
                        }}
                    >
                        <Image
                            src={team.team.logo}
                            width={25}
                            height={25}
                            alt={`${team.team.name}`}
                        />{' '}
                        {team.team.name}
                    </Link>
                ) : (
                    <span>{team.team.name}</span>
                )}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Played">
                {team.all.played}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Win">
                {team.all.win}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Draw">
                {team.all.draw}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Lose">
                {team.all.lose}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Goals-Diff">
                {team.goalsDiff}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Points">
                {team.points}
            </td>

            <td className="Standings-Table__Cell Standings-Table__Cell--Form">
                {<Form form={team.form} />}
            </td>
        </tr>
    );
}
