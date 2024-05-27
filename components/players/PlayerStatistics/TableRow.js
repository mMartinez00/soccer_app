import React from 'react';
import Image from 'next/image';
import { table } from './table';

function filterObj(stat, typeOfData) {
    const keys = Object.keys(stat);
    // console.log(typeOfData);
    // console.log(stat);

    // const a = [];
    const filtered = keys
        .filter((key, index) => {
            // typeOfData.includes(key);
            // console.log(typeOfData.includes(key));
            if (typeOfData.includes(key)) {
                // a.push(stat[key]);
                // console.log(stat[key]);
                // return { key: stat[key] };
                return stat[key];
                // console.log(stat[key]);
            }
        })
        .reduce((object, key) => {
            return Object.assign(object, {
                [key]: stat[key],
            });
        }, {});

    return filtered;
}

export default function TableRow({ stat }) {
    const general = filterObj(stat, table.General.Objects);
    const attacking = filterObj(stat, table.Attacking.Objects);
    const defending = filterObj(stat, table.Defending.Objects);

    console.log(general);

    return (
        <>
            <tr>
                <td>
                    {stat.league.name}{' '}
                    <Image
                        src={stat.league.logo}
                        alt="logo"
                        width={25}
                        height={25}
                    />
                </td>
                <td>{general.games.rating}</td>
                <td>{general.games.appearences}</td>
                <td>{general.games.lineups}</td>
                <td>{general.games.minutes}</td>
                <td>{general.fouls.commited}</td>
                <td>{general.fouls.drawn}</td>
                <td>{general.passes.total}</td>
                <td>{general.passes.key}</td>
                <td>{general.substitutes.in}</td>
                <td>{general.substitutes.out}</td>
            </tr>
        </>
    );
}
