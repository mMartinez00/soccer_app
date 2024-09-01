import React, { useState, useRef } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';
import { groupedByTeam, toggleActiveClass } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [playersStatistics, setPlayersStatistics] = useState('General');
    const mySliderRef = useRef(null);
    const playersStatisticsGroupedByTeam = groupedByTeam(statistics);
    const tables = Object.values(playersStatisticsGroupedByTeam);
    const teams = Object.keys(playersStatisticsGroupedByTeam);

    const handleButtonCLick = (e) => {
        setPlayersStatistics(e.target.innerText);

        toggleActiveClass(e);
    };

    const handleTabClick = (e, index) => {
        mySliderRef.current.dataset.tablePos = index + 1;

        toggleActiveClass(e);
    };

    return (
        <>
            <div className="Player_Statistics">
                <TeamsTabs teams={teams} handleClick={handleTabClick} />
                <StatButtons handleClick={handleButtonCLick} />
                <div className="Tables">
                    <div
                        className="Table_Container_Slider"
                        data-table-pos="1"
                        ref={mySliderRef}
                    >
                        {tables.map((row, index) => {
                            const teamName = row[0].team.name;
                            return (
                                <>
                                    <StatisticsTable
                                        key={teamName}
                                        index={index + 1}
                                        tableRows={row}
                                        tableHeaders={playersStatistics}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
