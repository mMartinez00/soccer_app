import React, { useState, useRef } from 'react';
import StatisticsTable from './StatisticsTable';
import Button from '@/components/Button';
import { statisticsButtons } from '../table';
import { groupedByTeam } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [currentStatistics, setCurrentStatistic] = useState('General');
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState(statisticsButtons[0]);
    const sliderRef = useRef(null);

    const statisticsGroupedByTeam = groupedByTeam(statistics);
    const tables = Object.values(statisticsGroupedByTeam);
    const teams = Object.keys(statisticsGroupedByTeam);

    const handleButtonCLick = (button) => {
        setCurrentStatistic(button);
        setActiveButton(button);
    };

    const handleTabClick = (index) => {
        sliderRef.current.dataset.tablePos = index + 1;
        setActiveTab(index);
    };

    return (
        <>
            <div className="Player-Statistics">
                <div className="Player-Statistics__Tabs">
                    {teams.map((team, index) => (
                        <Button
                            key={team}
                            index={index}
                            handleClick={() => handleTabClick(index)}
                            className={`Button Button-Tab ${
                                activeTab === index ? 'Active' : ''
                            }`}
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
                                index={index}
                                handleClick={() => handleButtonCLick(button)}
                                className={`Button Button-Statistics ${
                                    activeButton === button ? 'Active' : ''
                                }`}
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
                        ref={sliderRef}
                    >
                        {tables.map((row, index) => {
                            const teamName = row[0].team.name;
                            return (
                                <StatisticsTable
                                    key={teamName}
                                    index={index + 1}
                                    tableRows={row}
                                    tableHeaders={currentStatistics}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
