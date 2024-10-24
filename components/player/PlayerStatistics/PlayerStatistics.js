import React, { useState, useRef } from 'react';
import StatisticsTable from './StatisticsTable';
import Button from '@/components/Button';
import { statisticsButtons } from '../table';
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
            <div className="Player-Statistics">
                <div className="Player-Statistics__Tabs">
                    {teams.map((team, index) => (
                        <Button
                            key={team}
                            type="Tab"
                            index={index}
                            handleClick={handleTabClick}
                        >
                            {team}
                        </Button>
                    ))}
                </div>
                <div className="Player-Statistics__Buttons">
                    {statisticsButtons.map((button, index) => {
                        return (
                            <Button
                                key={button}
                                type="Statistics"
                                index={index}
                                handleClick={handleButtonCLick}
                            >
                                {button}
                            </Button>
                        );
                    })}
                </div>
                <div className="Player-Statistics__Tables">
                    <div
                        className="Player-Statistics__Slider"
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
