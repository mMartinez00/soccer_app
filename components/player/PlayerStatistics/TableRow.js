import React from 'react';
import Image from 'next/image';
import { table } from '../table';
import { filterObj } from '@/utils/utils';
import AttackingData from './AttackingData';
import GeneralData from './GeneralData';
import DefendingData from './DefendingData';

export default function TableRow({ stat, typeOfData }) {
    const general = filterObj(stat, table.General.Objects);
    const attacking = filterObj(stat, table.Attacking.Objects);
    const defending = filterObj(stat, table.Defending.Objects);

    return (
        <>
            <tr>
                <th>
                    {stat.league.name}{' '}
                    <Image
                        src={stat.league.logo}
                        alt="logo"
                        width={25}
                        height={25}
                    />
                </th>
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
