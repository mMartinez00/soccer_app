import React from 'react';
import Image from 'next/image';
import { table } from './table';
import AttackingData from './AttackingData';
import GeneralData from './GeneralData';
import DefendingData from './DefendingData';

function filterObj(stat, typeOfData) {
    const keys = Object.keys(stat);

    const filtered = keys
        .filter((key) => {
            if (typeOfData.includes(key)) {
                return stat[key];
            }
        })
        .reduce((object, key) => {
            return Object.assign(object, {
                [key]: stat[key],
            });
        }, {});

    return filtered;
}

export default function TableRow({ stat, typeOfData }) {
    const general = filterObj(stat, table.General.Objects);
    const attacking = filterObj(stat, table.Attacking.Objects);
    const defending = filterObj(stat, table.Defending.Objects);

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
                {typeOfData === 'Attacking' ? (
                    <AttackingData data={attacking} />
                ) : typeOfData === 'Defending' ? (
                    <DefendingData data={defending} />
                ) : (
                    <GeneralData data={general} />
                )}
            </tr>
        </>
    );
}
