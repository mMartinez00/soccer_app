import React, { useState, useRef } from 'react';
import StatisticsTable from './StatisticsTable';
import TeamsTabs from './TeamsTabs';
import StatButtons from './StatButtons';
import { playerStatisticsArray, groupedByTeam } from '@/utils/utils';

export default function PlayerStatistics({ statistics }) {
    const [playersStatistics, setPlayersStatistics] = useState('General');
    const mySliderRef = useRef(null);

    const a = groupedByTeam(playerStatisticsArray);

    const handleButtonCLick = (e) => {
        setPlayersStatistics(e.target.innerText);
    };

    const handleTabClick = (e, index) => {
        mySliderRef.current.dataset.tablePos = index + 1;
    };

    return (
        <>
            <div className="Player_Statistics">
                <TeamsTabs
                    teams={['Palmeiras', 'Paraguay']}
                    handleClick={handleTabClick}
                />
                <StatButtons handleClick={handleButtonCLick} />
                <div className="Tables">
                    <div
                        className="Table_Container_Slider"
                        data-table-pos="1"
                        ref={mySliderRef}
                    >
                        {/* {data.map((teamData, index) => {
                            const tableRef = (el) =>
                                (myTableRefs.current[index] = el);

                            return (
                                <>
                                    <StatisticsTable
                                        key={teamData[0].team.name}
                                        statistics={teamData}
                                        tableHeaders={playersStatistics}
                                        ref={tableRef}
                                    />
                                </>
                            );
                        })} */}

                        {Object.values(a).map((table, index) => {
                            return (
                                <>
                                    <StatisticsTable
                                        key={index}
                                        data={{
                                            tableRows: table,
                                            index: index + 1,
                                        }}
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
