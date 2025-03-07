import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import StatisticsTables from './StatisticsTables';
import TeamsTabs from './TeamsTabs';
import StatisticsButtons from './StatisticsButtons';
import { groupedByTeam } from '@/utils/utils';
import 'keen-slider/keen-slider.min.css';

export default function PlayerStatistics({ statistics }) {
    const [currentStatistics, setCurrentStatistic] = useState('General');
    const [activeTab, setActiveTab] = useState(0);
    const [activeButton, setActiveButton] = useState(0);

    const statisticsGroupedByTeam = groupedByTeam(statistics);
    const tables = Object.values(statisticsGroupedByTeam);
    const teams = Object.keys(statisticsGroupedByTeam);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        drag: false,
        slideChanged(slider) {
            setActiveTab(slider.track.details.rel);
        },
    });

    const handleButtonCLick = (button, index) => {
        setCurrentStatistic(button);
        setActiveButton(index);
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
        instanceRef.current?.moveToIdx(index);
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
                        className="Player-Statistics__Slider keen-slider"
                        ref={sliderRef}
                    >
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
