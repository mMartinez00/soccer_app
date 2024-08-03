import { table } from '@/components/players/table';
import React from 'react';

export default function SquadTable({
    goalkeepers,
    defenders,
    midfielders,
    attackers,
    season,
}) {
    console.log(goalkeepers);
    return (
        <>
            <table className="Squad_Table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Number</th>
                        <th>Age</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {goalkeepers.map((player) => {
                        return (
                            <>
                                <tr>
                                    <td>{player.name}</td>
                                    <td>{player.number}</td>
                                    <td>{player.age}</td>
                                    <td>{player.position}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
