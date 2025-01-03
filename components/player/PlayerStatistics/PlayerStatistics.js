import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatisticsButtons from './StatisticsButtons';
import { groupedByTeam } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [currentStatistics, setCurrentStatistic] = useState('General');
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState(statisticsButtons[0]);

    const statisticsGroupedByTeam = groupedByTeam(statistics);
    const tables = Object.values(statisticsGroupedByTeam);
    const teams = Object.keys(statisticsGroupedByTeam);

    const handleButtonCLick = (button) => {
        setCurrentStatistic(button);
        setActiveButton(button);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="Player-Statistics">
            <div className="Player-Statistics__Container">
                <div className="Player-Statistics__Tabs">
                    <TeamsTabs teams={teams} />
                </div>
                <div className="Player-Statistics__Buttons">
                    <StatisticsButtons />
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
        </div>
    );
}
