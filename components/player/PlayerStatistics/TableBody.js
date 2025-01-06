import React from 'react';
import { filterObj } from '@/utils/utils';
import { tableData } from '../table';
import Image from 'next/image';
import AttackingData from './AttackingData';
import DefendingData from './DefendingData';
import GeneralData from './GeneralData';

export default function TableBody({ rows, currentStatistics }) {
    return (
        <>
            <tbody>
                {rows.map((row) => {
                    const general = filterObj(row, tableData.general);
                    const attack = filterObj(row, tableData.attack);
                    const defending = filterObj(row, tableData.defending);

                    return (
                        <tr>
                            <th>
                                {row.league.name}{' '}
                                <Image
                                    src={row.league.logo}
                                    alt="logo"
                                    width={25}
                                    height={25}
                                />
                            </th>
                            {currentStatistics === 'General' ? (
                                <GeneralData data={general} />
                            ) : currentStatistics === 'Attacking' ? (
                                <AttackingData data={attack} />
                            ) : (
                                <DefendingData data={defending} />
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
