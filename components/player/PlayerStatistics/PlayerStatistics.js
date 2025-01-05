import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import StatisticsTables from './StatisticsTables';
import TeamsTabs from './TeamsTabs';
import StatisticsButtons from './StatisticsButtons';
import { groupedByTeam } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [currentStatistics, setCurrentStatistic] = useState('General');
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState(0);

    const statisticsGroupedByTeam = groupedByTeam(statistics);
    const tables = Object.values(statisticsGroupedByTeam);
    const teams = Object.keys(statisticsGroupedByTeam);

    const handleButtonCLick = (button, index) => {
        setCurrentStatistic(button);
        setActiveButton(index);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="Player-Statistics">
            <div className="Player-Statistics__Container">
                <div className="Player-Statistics__Tabs">
                    <TeamsTabs
                        teams={teams}
                        handleTabClick={handleTabClick}
                        activeTab={activeTab}
                    />
                </div>
                <div className="Player-Statistics__Buttons">
                    <StatisticsButtons
                        handleButtonCLick={handleButtonCLick}
                        activeButton={activeButton}
                    />
                </div>
                <div className="Player-Statistics__Tables">
                    <div
                        className="Player-Statistics__Slider"
                        data-table-pos="0"
                    >
                        {/* {console.log(tables)} */}
                        <StatisticsTables
                            tables={tables}
                            currentStatistics={currentStatistics}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
