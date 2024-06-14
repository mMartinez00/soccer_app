import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Team from '../fixtures/Team';
import Form from './Form';

export default function TableRow({ team }) {
    const router = useRouter();
    const { query } = router;

    return (
        <tr>
            <td className="row_cell rank">{team.rank}</td>

            <td className="row_cell team">
                <Link
                    href={{
                        pathname: `/team/${team.team.name}`,
                        query: {
                            teamId: `${team.team.id}`,
                            leagueId: `${query.leagueId}`,
                            season: `${query.season}`,
                        },
                    }}
                >
                    <Team team={team.team} />
                </Link>
            </td>

            <td className="row_cell ">{team.all.played}</td>

            <td className="row_cell ">{team.all.win}</td>

            <td className="row_cell">{team.all.draw}</td>

            <td className="row_cell lose">{team.all.lose}</td>

            <td className="row_cell goalsDiff">{team.goalsDiff}</td>

            <td className="row_cell points">{team.points}</td>

            <td className="row_cell form">{<Form form={team.form} />}</td>
        </tr>
    );
}
